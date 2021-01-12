import React, {useEffect} from "react";
import { useDispatch ,useSelector } from "react-redux";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { getStoreSchedules } from "../../../store/selectors";

import { getRankingNBA } from "../../../store/actions/actionsSchedules";

import { ActivityIndicator } from 'react-native-paper';
import RankingTable from '../../_shared.js/rankingTable';

const Nba = () => {

/*     const eastID = ["134863", "134862", "134883", "134860", "134861", "134870", "134871", "134880", "134881", "134873", "134874", "134882", "134872", "134864", "134884"];
*/
    let eastConf = [];
    let westConf = []; 

    const table = useSelector(getStoreSchedules);
    const dispatch = useDispatch();

    if(table.NBArank){
        table.NBArank.forEach(elm => {
            if(elm.Conference === "Eastern") {
                eastConf = [...eastConf, elm]
            }else {
               westConf = [...westConf, elm]
            }
        });
        eastConf.sort(function(a,b) {
            return b.Percentage - a.Percentage
        })
        westConf.sort(function(a,b) {
            return b.Percentage - a.Percentage
        })
    }

    useEffect(() => {
        if(table.NBArank) {
            console.log("request in cache")
            return
        } else {
            dispatch(getRankingNBA())
            console.log("request")
        }
        
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