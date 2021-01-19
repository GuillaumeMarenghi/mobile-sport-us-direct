import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { Button } from 'react-native-paper';


const Player = (player) => {
const { navigation } = player;

const _onPress = () => {
        navigation.navigate('Infos joueur',{player})
} 
    
    let position;
    switch (player.strPosition) {
        case "Defender":
            position = "Défenseur"
            break;
        case "Centre Back":
            position = "Défenseur"
            break;
        case "Goalkeeper":
            position = "Gardien"
            break;
        case "Attacking Midfielder":
            position = "Milieu Offensif"
            break;
        case "Midfielder":
            position = "Milieu"
            break;
        case "Centre Midfielder":
            position = "Milieu"
            break;
        case "Defensive Midfielder":
            position = "Milieu Défensif"
            break;  
        case "Winger":
            position = "Ailier"
            break;  
        case "Right Wing":
            position = "Ailier"
            break;
        case "Left Wing":
            position = "Ailier"
            break;
        case "Left Back":
            position = "Lateral Gauche"
            break;
        case "Right Back":
            position = "Lateral Droit"
            break;
        case "Forward":
            position = "Attaquant"
            break;
        case "Manager":
            position = "Entraineur"
            break;
        default:
            position = player.strPosition
            break;
    }

    return(
        <TouchableOpacity
        style={styles.container}
        onPress={_onPress}>
            <Image
                style={styles.img}
                source={{uri: player.strCutout ? player.strCutout : player.strThumb}}
            />
            <Text style={styles.player}>{player.strPlayer}</Text>
            <Text>{position}</Text>
            <Button  mode="contained" compact={true} style={styles.btn} uppercase={false} color="#091c3d">
            voir la fiche
            </Button>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img : {
        width:100,
        height: 100
    },
    container : {
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        marginVertical: 8,
    },
    player: {
        fontWeight: 'bold'
    },
    btn : {
        margin: 7
    }

})

export default Player;