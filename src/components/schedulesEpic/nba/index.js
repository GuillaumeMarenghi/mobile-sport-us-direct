import React, {useEffect} from "react";
import { useDispatch ,useSelector } from "react-redux";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { getStoreSchedules } from "../../../store/selectors";
import { DataTable } from 'react-native-paper';

import { getRankingNBA } from "../../../store/actions/actionsSchedules";

import { ActivityIndicator, Colors } from 'react-native-paper';

const Nba = () => {

    const east = [134863, 134862, 134883, 134860, 134861, 134870, 134871, 134880, 134881, 134873, 134874, 134882, 134872, 134864, 134884];
    const table = useSelector(getStoreSchedules);
    console.log('table:', table.NBArank)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRankingNBA())
    }, []); 

    return(
        <ScrollView style={styles.container}>
            {!table.NBArank ? <ActivityIndicator /> :
            <View>
                <Text>Conférence Ouest</Text>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Pos</DataTable.Title>
                        <DataTable.Title>Team</DataTable.Title>
                        <DataTable.Title numeric>Joué</DataTable.Title>
                        <DataTable.Title numeric>Win</DataTable.Title>
                        <DataTable.Title numeric>Loose</DataTable.Title>
                        <DataTable.Title numeric>%</DataTable.Title>
                    </DataTable.Header>
                </DataTable>
            </View>}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

    }
  });

export default Nba;