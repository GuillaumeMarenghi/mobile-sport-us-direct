import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, Text } from "react-native";

import { getLastScroresNBA, getLastScroresMLB, getLastScroresNFL, getLastScroresNHL, getLastScroresMLS} from "../../../store/actionLastScores";
import { getStoreLastScores} from "../../../store/selectors";

const LastScores = ({stateValue}) => {
//console.log('stateValue:', stateValue)
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
            case 'MLS':
                dispatch(getLastScroresMLS(stateValue));
                break;
            default:
                return;
        }
    }, [stateValue]) 
    
    console.log('result',lastScores.NBAlastScores);
    return(
        <View style={styles.section}>
            <Text>score :</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    section : {

    },

})

export default LastScores;