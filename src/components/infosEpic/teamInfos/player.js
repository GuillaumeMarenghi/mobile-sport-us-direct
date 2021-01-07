import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { Button } from 'react-native-paper';


const Player = (player) => {
const { navigation } = player;

const _onPress = () => {
        navigation.navigate('Player Infos',{player})
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
            <Text>{player.strPosition}</Text>
            <Button  mode="contained" compact={true} style={styles.btn} uppercase={false}>
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