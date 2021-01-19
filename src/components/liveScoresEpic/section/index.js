import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ToggleButton } from 'react-native-paper';

import Scores from './scores';

const main = () => {

    const [value, setValue] = useState('French%20Ligue%201');

    return(
        <View style={styles.section}>
            <ToggleButton.Row onValueChange={value => setValue(value)} value={value} >
                <ToggleButton icon="numeric-1-box" color="#cefb03" value="French%20Ligue%201" style={styles.toggle}/>
                <ToggleButton icon="numeric-2-box" color="#1afed3" value="French%20Ligue%202" style={styles.toggle}/>
                <ToggleButton icon="alpha-n-box" color="#2972a9" value="French%20Championnat%20National" style={styles.toggle}/>
            </ToggleButton.Row>
            <ScrollView>
                <Scores stateValue={value}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    section : {

    },
    toggle : {
        width: "33.3%",
    }
})

export default main;