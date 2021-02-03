import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { getLastScroresL1, getLastScroresL2, getLastScroresN1, getLogo} from "../../../store/actions/actionLastScores";
import { getStoreLastScores} from "../../../store/selectors";

import GameBox from './gameBox';
import Error from '../../_shared.js/error'

const LastScores = ({stateValue}) => {

    const dispatch = useDispatch();
    const lastScores = useSelector(getStoreLastScores);

    useEffect(() => {
        switch (stateValue){
            case 'French%20Ligue%201':
                dispatch(getLastScroresL1(stateValue));
                break;
            case 'French%20Ligue%202':
                dispatch(getLastScroresL2(stateValue));
                break;
            case 'French%20Championnat%20National':
                dispatch(getLastScroresN1(stateValue));
                break;
            default:
                return;
        };
        dispatch(getLogo(stateValue));
    }, [stateValue]) 

    return(
        <View style={styles.section}>
            <Text style={styles.title}> Derniers Matchs terminé</Text>
            {!lastScores.loading && lastScores.logo && lastScores.gameLastScores 
            ? 
            lastScores.gameLastScores.map( game => <GameBox game={game} teams={lastScores.logo} key={game.idEvent} /> ) 
            : 
            <ActivityIndicator /> } 
            {lastScores.requestError && <Error /> }
        </View>
    )
}

const styles = StyleSheet.create({
    section : {
    },
    title : {
        backgroundColor: '#1afed3',
        color: '#091c3d',
        textAlign: 'center',
        paddingVertical: 4
    }

})

export default LastScores;