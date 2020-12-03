import React from "react";
import { View, StyleSheet, Text, Image, } from "react-native";


const GameBox = ( {game} ) => {

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.date}>{game.strLeague}</Text>
            </View>
            <View style={styles.section}>
                <View style={styles.teamCtn}>
                  <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: game.strAwayTeamBadge,
                          }}
                    />  
                    <Text style={styles.team}>{game.strAwayTeam}</Text>
                </View>
                <View >
                        <Text style={styles.min}>{game.strProgress}'</Text>
                    <Text style={styles.score}>{game.intAwayScore} - {game.intHomeScore}</Text>
                </View>
                <View style={styles.teamCtn}>
                      <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: game.strHomeTeamBadge,
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
    },
    min:{
        textAlign: 'center'
    }

})

export default GameBox;