import React, {useEffect} from "react";
import { useDispatch ,useSelector } from "react-redux";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { getStoreSchedules } from "../../../store/selectors";

import { getRankingNBA } from "../../../store/actions/actionsSchedules";

import { ActivityIndicator } from 'react-native-paper';
import RankingTable from '../../_shared.js/rankingTable';

const Nba = () => {

    const eastID = ["134863", "134862", "134883", "134860", "134861", "134870", "134871", "134880", "134881", "134873", "134874", "134882", "134872", "134864", "134884"];
    let eastConf = [];
    let westConf = [];

    const table = useSelector(getStoreSchedules);
    const dispatch = useDispatch();

    if(table.NBArank){
        table.NBArank.forEach(elm => {
            const prc = elm.win/elm.played;
            elm = {...elm, prc: prc.toFixed(2) }
            if(eastID.includes(elm.teamid)) {
                eastConf = [...eastConf, elm]
            }else {
               westConf = [...westConf, elm]
            }
        });
        eastConf.sort(function(a,b) {
            return b.prc - a.prc
        })
        westConf.sort(function(a,b) {
            return b.prc - a.prc
        })
    }

    useEffect(() => {
        dispatch(getRankingNBA())
    }, []); 

    return(
        <ScrollView style={styles.container}>
            {!table.NBArank && <ActivityIndicator /> }
            {table.NBArank && <RankingTable title='Conférence Est' leagueArray={eastConf} />}
            {table.NBArank && <RankingTable title='Conférence Ouest' leagueArray={westConf} />}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

    }
  });

export default Nba;