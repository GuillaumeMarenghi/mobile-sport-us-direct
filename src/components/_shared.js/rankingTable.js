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
                        <DataTable.Row key={elm.teamid}>
                            <DataTable.Cell>{index + 1}</DataTable.Cell>
                            <DataTable.Cell>{elm.name}</DataTable.Cell>
                            <DataTable.Cell numeric>{elm.played}</DataTable.Cell>
                            <DataTable.Cell numeric>{elm.win}</DataTable.Cell>
                            <DataTable.Cell numeric>{elm.loss}</DataTable.Cell>
                            <DataTable.Cell numeric>{elm.prc}</DataTable.Cell>
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