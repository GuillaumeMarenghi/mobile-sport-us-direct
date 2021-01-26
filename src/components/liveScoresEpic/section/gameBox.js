import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { getStoreLastScores} from "../../../store/selectors";
import { useSelector } from "react-redux";

const GameBox = ( {game, teams} ) => {

    const lastScores = useSelector(getStoreLastScores);
    
    const homeTeam = teams.find( team => team.idTeam == game.idHomeTeam);
    const awayTeam = teams.find( team => team.idTeam == game.idAwayTeam);
    
        const _onPress = () => {
            lastScores.navigation.navigate( "Details", {
                eventId: game.idEvent, game: game, homeTeam, awayTeam
            })
        }

    return(
        <View style={styles.container}>
            <TouchableOpacity  onPress={_onPress}>
            <View>
                <Text style={styles.date}>{game.strLeague} - {game.dateEvent} - terminé</Text>
            </View>
            <View style={styles.section}>
                <View style={styles.teamCtn}>
                  <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: homeTeam.strTeamBadge,
                          }}
                    />  
                    <Text style={styles.team}>{game.strHomeTeam}</Text>
                </View>
                <View >
                    <Text style={styles.score}>{game.intHomeScore} - {game.intAwayScore}</Text>
                </View>
                <View style={styles.teamCtn}>
                      <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: awayTeam.strTeamBadge,
                          }}
                    /> 
                    <Text style={styles.team}>{game.strAwayTeam}</Text>
                </View>
            </View>
       
            <Text style={{textAlign: 'center', fontStyle: 'italic'}}>Presser pour voir les détails</Text>
        </TouchableOpacity> 
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#041e4230',
        borderRadius: 20,
        padding: 10,
        margin: 10,
    },
    date : {
        textAlign: 'center',
        backgroundColor: '#091c3d',
        padding: 5,
        borderRadius: 10,
        color: '#cefb03',
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
        color: '#091c3d'
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