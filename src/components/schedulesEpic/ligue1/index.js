import React, {useEffect} from "react";
import { useDispatch ,useSelector } from "react-redux";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { getStoreSchedules } from "../../../store/selectors";

import { getRankingL1, getRankingL2, getRankingN1 } from "../../../store/actions/actionsSchedules";

import { ActivityIndicator } from 'react-native-paper';
import RankingTable from '../../_shared.js/rankingTable';

const L1 = ({route}) => {

    const { name } = route.params;
    const table = useSelector(getStoreSchedules);
    const dispatch = useDispatch();

    useEffect(() => {
        if (name === "Ligue 1 Uber Eats"){
            dispatch(getRankingL1())        
        } else if (name === "Ligue 2 BKT"){
            dispatch(getRankingL2())
        } else if (name === "National 1"){
            dispatch(getRankingN1())
        }
    }, []);  

    return(
          <ScrollView style={styles.container}>
            {!table.Lrank && <ActivityIndicator /> }
            {!table.loading && <RankingTable title={name} leagueArray={table.Lrank} />}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

    }
  });

export default L1;