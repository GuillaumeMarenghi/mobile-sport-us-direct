import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DataTable } from 'react-native-paper';

const RankingTable = ({title, leagueArray}) => {

    return(
            <View>
                <Text style={styles.title}>{title}</Text>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Pos</DataTable.Title>
                        <DataTable.Title>Team</DataTable.Title>
                        <DataTable.Title numeric>Joué</DataTable.Title>
                        <DataTable.Title numeric>Win</DataTable.Title>
                        <DataTable.Title numeric>Loss</DataTable.Title>
                        <DataTable.Title numeric>%</DataTable.Title>
                    </DataTable.Header>
                    {leagueArray.map((elm, index) => {
                    return (
                        <DataTable.Row key={elm.GlobalTeamID}>
                            <DataTable.Cell>{index + 1}</DataTable.Cell>
                            <DataTable.Cell>{elm.City}</DataTable.Cell>
                            <DataTable.Cell numeric>{elm.Wins + elm.Losses}</DataTable.Cell>
                            <DataTable.Cell numeric>{elm.Wins}</DataTable.Cell>
                            <DataTable.Cell numeric>{elm.Losses}</DataTable.Cell>
                            <DataTable.Cell numeric>{elm.Percentage}</DataTable.Cell>
                        </DataTable.Row>
                    )})} 
                </DataTable>
            </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginTop : 12,
        fontSize: 18,
        fontWeight: 'bold'
    }
  });

export default RankingTable;