import React from "react";
import { View, StyleSheet, Text } from "react-native";

import LastScores from './lastScores';

const Scores = ({stateValue}) => {
//console.log('stateValue:', stateValue)

    return(
        <View style={styles.section}>
            <LastScores stateValue={stateValue}/>
        </View>
    )
}

const styles = StyleSheet.create({
    section : {

    },

})

export default Scores;