import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const NextBox = ( {game, teams} ) => {
    
    const homeTeam = teams.find( team => team.idTeam == game.idHomeTeam);

    const awayTeam = teams.find( team => team.idTeam == game.idAwayTeam);

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.date}>{game.strLeague} - {game.dateEvent} à {game.strTime}</Text>
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
                    <Text style={styles.score}>@</Text>
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
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 10,
        color: '#041e42',
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

export default NextBox;