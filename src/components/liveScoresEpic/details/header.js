import React from 'react';
import { Text, Image, StyleSheet, View} from "react-native";

const Header = ({game, homeTeam, awayTeam}) => {

    return(
        <View style={styles.container}>
        <View>
            <Text style={styles.date}>{game.strVenue}</Text>
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
        
    </View>
    )
}

const styles = StyleSheet.create({
    container : {

        padding: 10,
        marginTop: 10,
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

export default Header;