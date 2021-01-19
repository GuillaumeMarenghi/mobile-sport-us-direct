import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { getNextScroresL1, getNextScroresL2, getNextScroresN1} from "../../../store/actions/actionNextScores";
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
            case 'French%20Ligue%201':
                dispatch(getNextScroresL1(stateValue));
                break;
            case 'French%20Ligue%202':
                dispatch(getNextScroresL2(stateValue));
                break;
            case 'French%20Championnat%20National':
                dispatch(getNextScroresN1(stateValue));
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
        backgroundColor: '#1afed3',
        color: '#091c3d',
        textAlign: 'center',
        paddingVertical: 4
    },
    noMatch: {
        textAlign: 'center'
    }

})

export default NextScores;