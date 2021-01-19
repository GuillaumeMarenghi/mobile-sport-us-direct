import React from "react";
import { ScrollView, StyleSheet, Image ,View, Text} from "react-native";

import ListSection from '../listSection';


const main = () => {
    return(
        <View style={styles.container}>
            {/* <Text style={styles.title}>Choix des ligues</Text> */}
            <ScrollView >
            <Text style={styles.infos}>Les ligues bloquent parfoit les videos dans les lecteurs intégrés si c'est le cas cliquez sur le button "voir la video sur youtube" </Text>
            <ListSection league="Ligue 1 Uber Eats" icon="soccer" color="#091c3d"/>
            <ListSection league="Ligue 2 BKT" icon="soccer" color="#1afed3"/>
            <View style={styles.logoCtn}>
                <Image 
                    style={styles.logo}
                    source={require('../../../../assets/soccer_france.png')}>
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
        height: 300,
        marginTop: 50
    },
    logoCtn: {
        alignItems: "center"
    },
    infos : {
        textAlign: "center",
        padding: 5,
        fontSize: 12
    }
})

export default main;