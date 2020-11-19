import React from "react";
import { Text, ScrollView, StyleSheet, View} from "react-native";
import { Avatar, Colors } from 'react-native-paper';

import Tag from '../../_shared.js/tag';
import OpenUrlButton from '../../_shared.js/openUrlButton';

const PlayerInfos = ({route}) => {
    const { player } = route.params
    //console.log('player:', player)

    return(
    <ScrollView>
        <View style={styles.container}>
        <Text style={styles.fiche}>{player.strPlayer}</Text>
        <Avatar.Image size={200} source={{uri: player.strThumb}} style={styles.avatar}/>
        <View style={styles.infos}>
            <Tag content={player.strTeam} bg='grey' clr='white' />
            <Tag icon="arrow-expand-vertical" content={player.strHeight} bg="#fb9e68" clr='white' />
            <Tag icon="weight" content={player.strWeight} bg="#44c6c2" clr="white" />
            {player.strPosition ? <Tag content={player.strPosition} bg="#b04ab5" clr="white" /> : null}
            <Tag content={`Né le ${player.dateBorn} à ${player.strBirthLocation}`} bg="#64cbf4" clr="white" />
            <Tag icon="flag" content={player.strNationality} bg="#fcc350" clr="white" />
        </View>
        {player.strTwitter || player.strInstagram ?
        <View style={styles.sn}>
            {player.strTwitter ? <OpenUrlButton url={`https://${player.strTwitter}`} reseau='twitter-box' color={Colors.blue500} /> : null}
            {player.strInstagram ? <OpenUrlButton url={`https://${player.strInstagram}`} reseau='instagram' color={Colors.black500} /> : null }
        </View>
        : null
        }
        <View style={styles.bio}>
            <Text>Bio :</Text>
            {player.strDescriptionFR ? <Text>{player.strDescriptionFR}</Text> : <Text>{player.strDescriptionEN}</Text>}
        </View>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    infos: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    name: {
        fontWeight: 'bold',
        fontSize: 20
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    fiche: {
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 20
    },
    avatar: {
        marginVertical: 10
    },
    sn : {
        width: '100%',
        margin : 10,
        borderTopColor : 'black',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    bio: {
        padding: 10
    }
})

export default PlayerInfos;