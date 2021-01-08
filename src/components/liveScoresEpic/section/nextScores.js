import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { getNextScroresNBA, getNextScroresMLB, getNextScroresNFL, getNextScroresNHL, getNextScroresMLS} from "../../../store/actions/actionNextScores";
import { getLogo } from "../../../store/actions/actionLastScores";
import { getStoreNextScores, getStoreLastScores} from "../../../store/selectors";

import NextBox from './nextBox';
import Error from '../../_shared.js/error'

const NextScores = ({stateValue}) => {

    const dispatch = useDispatch();
    const nextScores = useSelector(getStoreNextScores);
    const lastScores = useSelector(getStoreLastScores);

    useEffect(() => {
        switch (stateValue){
            case 'NBA':
                dispatch(getNextScroresNBA(stateValue));
                break;
            case 'MLB':
                dispatch(getNextScroresMLB(stateValue));
                break;
            case 'NFL':
                dispatch(getNextScroresNFL(stateValue));
                break;
            case 'NHL':
                dispatch(getNextScroresNHL(stateValue));
                break;
            case 'American Major League Soccer':
                dispatch(getNextScroresMLS(stateValue));
                break;
            default:
                return;
        };
        dispatch(getLogo(stateValue));
    }, [stateValue]) 

    return(
        <View style={styles.section}>
            <Text style={styles.title}>Prochain matchs</Text>
            {nextScores.loading && <ActivityIndicator />}
            {!nextScores.loading && lastScores.logo && nextScores.gameNextScores 
            ? 
            nextScores.gameNextScores.map( game => <NextBox game={game} teams={lastScores.logo} key={game.idEvent} /> ) 
            : 
            null } 
            {!nextScores.gameNextScores && <Text style={styles.noMatch}>Calendrier non fixé</Text>}
            {nextScores.requestError && <Error /> }
        </View>
    )
}

const styles = StyleSheet.create({
    section : {
        paddingBottom : 260
    },
    title : {
        backgroundColor: '#bf0d3e',
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 4
    },
    noMatch: {
        textAlign: 'center'
    }

})

export default NextScores;