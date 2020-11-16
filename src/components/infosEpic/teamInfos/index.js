import React from "react";
import { Text, ScrollView, StyleSheet, View} from "react-native";

import TopPage from "../leagueInfos/topPage";
import OpenURLButton from "../../_shared.js/openUrlButton";
import Stadium from "./stadium";
import Players from "./players";

import { Colors } from 'react-native-paper';

const TeamInfos = ({route}) => {

    const { team, navigation } = route.params;
    console.log('team:', team)

    return(
        <ScrollView >
            <TopPage banner={team.strTeamBanner} leagueName={team.strTeam} />
            <View style={styles.SNContainer}>
            <Text style={styles.text}>clique sur les icones pour rejoindre les pages officielles de la franchise</Text>
            <View style={styles.container}>
                <OpenURLButton url={`https://${team.strFacebook}`} reseau="facebook-box" color={Colors.blue500}/>
                <OpenURLButton url={`https://${team.strTwitter}`} reseau="twitter-box" color={Colors.blue500}/>
                {team.strInstagram ?
                <OpenURLButton url={`https://${team.strInstagram}`} reseau="instagram" color={Colors.black500}/> : null }
                {team.strYoutube ?
                <OpenURLButton url={`https://${team.strYoutube}`} reseau="youtube" color={Colors.red500}/> : null }
                <OpenURLButton url={`https://${team.strWebsite}`} reseau="web" color={Colors.black500}/>
            </View>
            </View>
            <Stadium team={team}/>
            <Players teamName={team.strTeam}/>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container : {
        display : 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text : {
        textAlign: 'center'
    },
    SNContainer : {
        margin : 10,
        borderTopColor : 'black',
        borderTopWidth: 5,
        borderBottomWidth: 5,
        padding: 5

    }
})


export default TeamInfos;