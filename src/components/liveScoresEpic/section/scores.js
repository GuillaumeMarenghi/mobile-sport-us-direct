import React from "react";
import { View, StyleSheet, Text } from "react-native";

import LastScores from './lastScores';
import LiveScores from './live';
import NextScores from './nextScores';

const Scores = ({stateValue}) => {
//console.log('stateValue:', stateValue)

    return(
        <View style={styles.section}>
            <LiveScores stateValue={stateValue} />
            <LastScores stateValue={stateValue} />
            <NextScores stateValue={stateValue} />
        </View>
    )
}

const styles = StyleSheet.create({
    section : {

    },

})

export default Scores;