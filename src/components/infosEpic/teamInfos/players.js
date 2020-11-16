import React, {useEffect} from "react";
import { Text, StyleSheet, View, Image} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { getAllPlayers } from "../../../store/actions";
import { getInfos } from "../../../store/selectors";

const Players = ({teamName}) => {

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
        <View style={styles.players}>
        {players && players.map( player => {
            return(
                <View><Text>{player.strPlayer}</Text></View>
            )
        })}
        </View>
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
        
    }
});

export default Players;