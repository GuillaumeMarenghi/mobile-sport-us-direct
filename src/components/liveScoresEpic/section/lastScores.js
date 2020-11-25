import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { getLastScroresNBA, getLastScroresMLB, getLastScroresNFL, getLastScroresNHL, getLastScroresMLS, getLogo} from "../../../store/actionLastScores";
import { getStoreLastScores} from "../../../store/selectors";

import GameBox from './gameBox';

    const LastScores = ({stateValue}) => {

    const dispatch = useDispatch();
    const lastScores = useSelector(getStoreLastScores);

    useEffect(() => {
        switch (stateValue){
            case 'NBA':
                dispatch(getLastScroresNBA(stateValue));
                break;
            case 'MLB':
                dispatch(getLastScroresMLB(stateValue));
                break;
            case 'NFL':
                dispatch(getLastScroresNFL(stateValue));
                break;
            case 'NHL':
                dispatch(getLastScroresNHL(stateValue));
                break;
            case 'American Major League Soccer':
                dispatch(getLastScroresMLS(stateValue));
                break;
            default:
                return;
        };
        dispatch(getLogo(stateValue));
    }, [stateValue]) 

    //console.log('result', typeof lastScores.logo, lastScores.logo);
    return(
        <View style={styles.section}>
            <Text style={styles.title}>Matchs terminé</Text>
            {!lastScores.loading && lastScores.logo && lastScores.gameLastScores 
            ? 
            lastScores.gameLastScores.map( game => <GameBox game={game} teams={lastScores.logo} key={game.idEvent} /> ) 
            : 
            <ActivityIndicator /> } 
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
    }

})

export default LastScores;