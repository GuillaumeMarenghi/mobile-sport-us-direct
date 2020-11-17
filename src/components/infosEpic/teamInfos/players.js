import React, {useEffect} from "react";
import { Text, StyleSheet, View, Image} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ActivityIndicator } from 'react-native-paper';

import { getAllPlayers } from "../../../store/actions";
import { getInfos } from "../../../store/selectors";

import Player from "./player";

const Players = ({teamName, navigation}) => {

    const dispatch = useDispatch();

    const infos = useSelector(getInfos);
    const players = infos.players;
    //console.log('infos:', players)

    useEffect(() => {
        dispatch(getAllPlayers(teamName));
    }, [])

    return(
    <View>
        <Text style={styles.title}>Coach et Joueurs</Text>
        {infos.loading ? <ActivityIndicator /> :
        <View style={styles.players}>
        {players && players.map( player => {
            return(
                <View key={player.strPlayer} style={styles.player}>
                    <Player {...player} navigation={navigation}/>
                </View>
            )
        })}
        </View>}
    </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 20
    },
    players : {
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    player: {
        maxWidth: '33%'
    }
});

export default Players;