import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ToggleButton } from 'react-native-paper';

import Scores from './scores';

const main = () => {

    const [value, setValue] = useState('NBA');

    return(
        <View style={styles.section}>
            <ToggleButton.Row onValueChange={value => setValue(value)} value={value} >
                <ToggleButton icon="basketball" value="NBA" style={styles.toggle}/>
                <ToggleButton icon="baseball-bat" value="MLB" style={styles.toggle}/>
                <ToggleButton icon="football" value="NFL" style={styles.toggle}/>
                <ToggleButton icon="hockey-puck" value="NHL" style={styles.toggle}/>
                <ToggleButton icon="soccer" value="American Major League Soccer" style={styles.toggle}/>
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
        width: "20%",
    }
})

export default main;