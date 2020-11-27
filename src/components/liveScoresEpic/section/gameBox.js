import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import { getStoreLastScores } from '../../../store/selectors'

const GameBox = ( {game, teams} ) => {

/*     const lastScore = useSelector(getStoreLastScores);
    const navigation = lastScore.navigation; */
    
    const homeTeam = teams.find( team => team.idTeam == game.idHomeTeam);

    const awayTeam = teams.find( team => team.idTeam == game.idAwayTeam);

/*     const _onPress = (eventId) => {
            navigation.navigate('Details', {
               eventId
            })
    } */

    return(
        <View style={styles.container}>
        {/* <TouchableOpacity style={styles.container} onPress={() => _onPress(game.idEvent)}> */}
            <View>
                <Text style={styles.date}>{game.strLeague} - {game.dateEvent} - terminé</Text>
            </View>
            <View style={styles.section}>
                <View style={styles.teamCtn}>
                  <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: awayTeam.strTeamBadge,
                          }}
                    />  
                    <Text style={styles.team}>{game.strAwayTeam}</Text>
                </View>
                <View >
                    <Text style={styles.score}>{game.intAwayScore} - {game.intHomeScore}</Text>
                </View>
                <View style={styles.teamCtn}>
                      <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: homeTeam.strTeamBadge,
                          }}
                    /> 
                    <Text style={styles.team}>{game.strHomeTeam}</Text>
                </View>
            </View>
       
            {/* <Text style={{textAlign: 'center', fontStyle: 'italic'}}>Selectionnez pour voir les détails du match</Text> */}
        {/* </TouchableOpacity> */} 
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        //borderWidth: 3,
        //borderColor: '#bf0d3e',
        //backgroundColor: '#bf0d3e30',
        backgroundColor: '#041e4230',
        borderRadius: 20,
        padding: 10,
        margin: 10,
    },
    date : {
        textAlign: 'center',
        backgroundColor: '#041e42',
        padding: 5,
        borderRadius: 10,
        color: '#fff',
        marginBottom: 8
    },
    section : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    score: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#041e42'
    },
    team : {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    teamCtn : {
        width: '30%',
        alignItems: "center"
    },
    tinyLogo :{
        width: 50,
        height: 50
    }

})

export default GameBox;