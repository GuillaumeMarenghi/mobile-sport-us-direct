import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, Text, View } from "react-native";

import {postNav} from '../../../store/actionLastScores';

import Section from '../section';

const main = ({navigation}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postNav(navigation))
    },[])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Derniers résultats / Prochains Matchs</Text>
            <View>
                <Section />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginTop: 5
    },
    title : {
        fontStyle : "italic",
        fontSize : 20,
        fontWeight: "bold",
        textAlign : "center",
        marginBottom: 15
    }
})

export default main;