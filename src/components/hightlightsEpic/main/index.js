import React from "react";
import { ScrollView, StyleSheet, Image ,View } from "react-native";

import ListSection from '../listSection';


const main = () => {
    return(
        <View style={styles.container}>
            {/* <Text style={styles.title}>Choix des ligues</Text> */}
            <ScrollView >
            <ListSection league="NFL" icon="football" color="#e73c3f"/>
            <ListSection league="NBA" icon="basketball" color="#f6994f"/>
            <ListSection league='MLB' icon="baseball" color="#0f2472"/>
            <ListSection league='NHL' icon="hockey-puck" color="#73717e"/>
            <ListSection league='American Major League Soccer' icon="soccer" color="#f5c30a"/>
            <View style={styles.logoCtn}>
                <Image 
                    style={styles.logo}
                    source={require('../../../../assets/ZSPlogo.png')}>
                </Image>
            </View>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
    },
    title : {
        //fontStyle : "italic",
        fontSize : 30,
        fontWeight: "bold",
        textAlign : "center",
        padding: 15,
        backgroundColor: '#041e4220',
        color: '#041e42',
        borderBottomWidth: 3,
        borderBottomColor: '#041e42'
    },
    logo: {
        width: 300,
        height: 300
    },
    logoCtn: {
        alignItems: "center"
    }
})

export default main;