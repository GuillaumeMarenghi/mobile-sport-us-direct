import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import ListSection from '../listSection';


const main = () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Highlights</Text>
            <ListSection league="NFL" icon="football" color="#e73c3f"/>
            <ListSection league="NBA" icon="basketball" color="#f6994f"/>
            <ListSection league='MLB' icon="baseball" color="#0f2472"/>
            <ListSection league='NHL' icon="hockey-puck" color="#73717e"/>
            <ListSection league='American Major League Soccer' icon="soccer" color="#f5c30a"/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        marginTop: 70
    },
    title : {
        fontStyle : "italic",
        fontSize : 30,
        fontWeight: "bold",
        textAlign : "center",
        marginBottom: 15
    }
})

export default main;