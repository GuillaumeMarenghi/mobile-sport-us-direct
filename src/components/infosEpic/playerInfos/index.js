import React, {useEffect} from "react";
import { Text, ScrollView, StyleSheet, View} from "react-native";
import { Avatar, Colors } from 'react-native-paper';
import { useDispatch, useSelector} from 'react-redux'

import { getInfos } from '../../../store/selectors';
import { getPlayerDetail } from '../../../store/actions/actions'

import Tag from '../../_shared.js/tag';
import OpenUrlButton from '../../_shared.js/openUrlButton';
import TeamCareer from "./teamCareer";
import Honors from './honors';

const PlayerInfos = ({route}) => {
    const { player } = route.params
    const dispatch = useDispatch();
    const infos = useSelector(getInfos);
    
    useEffect(() => {
        dispatch(getPlayerDetail(player.idPlayer))
    }, []); 

    return(
    <ScrollView>
        <View style={styles.container}>
        <Text style={styles.fiche}>{player.strPlayer}</Text>
        <Avatar.Image size={200} source={{uri: player.strThumb}} style={styles.avatar}/>
        <View style={styles.infos}>
            <Tag content={player.strTeam} bg='#091c3d' clr='#cefb03' />
            <Tag icon="arrow-expand-vertical" content={player.strHeight} bg="#2972a9" clr='white' />
            <Tag icon="weight" content={player.strWeight} bg="#1afed3" clr="#091c3d" />
            <Tag content={`Né le ${player.dateBorn} à ${player.strBirthLocation}`} bg="#cefb03" clr="#091c3d" />
            <Tag icon="flag" content={player.strNationality} bg="#091c3d" clr="#1afed3" />
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
        </View >
        <View style={{justifyContent: 'flex-start', padding: 10}}>
            {infos.playerTeams && <Text style={styles.title}> Ancienne équipes </Text>}
            {/* {infos.playerContract ? infos.playerContract.map( elm => <TeamCareer {...elm} key={elm.id} />) : null} */}
            {infos.playerTeams ? infos.playerTeams.sort((a,b) => {return b.strJoined - a.strJoined}).map( elm => <TeamCareer {...elm} key={elm.id} />) : null}
        </View>
        <View style={{justifyContent: 'flex-start', padding: 10}}>      
            {infos.playerHonours && <Text style={styles.title}>Titres et récompenses</Text>}
            {infos.playerHonours ? infos.playerHonours.sort((a,b) => {return b.strSeason - a.strSeason}).map( elm => <Honors {...elm} key={elm.id} />) : null}
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
    },
    title: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginBottom: 10
    }
})

export default PlayerInfos;