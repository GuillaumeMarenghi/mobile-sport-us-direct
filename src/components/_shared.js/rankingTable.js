import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DataTable } from 'react-native-paper';

const RankingTable = ({title, leagueArray}) => {
console.log('leagueArray:', leagueArray)

    let trueArray;
    trueArray = leagueArray.sort((a,b) => {
        if (a.total == b.total && a.goalsdifference < b.goalsdifference)
        return +1;
        if (a.total == b.total && a.goalsdifference > b.goalsdifference)
        return -1
    });

    return(
            <View>
                <Text style={styles.title}>{title}</Text>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Pos</DataTable.Title>
                        <DataTable.Title>Club</DataTable.Title>
                        <DataTable.Title numeric>Joué</DataTable.Title>
                        <DataTable.Title numeric>Pts</DataTable.Title>
                        <DataTable.Title numeric>G</DataTable.Title>
                        <DataTable.Title numeric>N</DataTable.Title>
                        <DataTable.Title numeric>P</DataTable.Title>
                        <DataTable.Title numeric>+/-</DataTable.Title>
                    </DataTable.Header>
                    {trueArray.map((elm, index) => {
                    return (
                        <DataTable.Row key={elm.teamid}>
                            <DataTable.Cell>{index + 1}</DataTable.Cell>
                            <DataTable.Cell>{elm.name}</DataTable.Cell>
                            <DataTable.Cell numeric>{elm.played}</DataTable.Cell>
                            <DataTable.Cell numeric>{elm.total}</DataTable.Cell>
                            <DataTable.Cell numeric>{elm.win}</DataTable.Cell>
                            <DataTable.Cell numeric>{elm.draw}</DataTable.Cell>
                            <DataTable.Cell numeric>{elm.loss}</DataTable.Cell>
                            <DataTable.Cell numeric>{elm.goalsdifference}</DataTable.Cell>
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