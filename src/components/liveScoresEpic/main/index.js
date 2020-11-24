import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Section from '../section';

const main = () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Live et derniers resultats</Text>
            <View>
                <Section />
            </View>
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