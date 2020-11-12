import React, {useEffect} from "react";
import { View, StyleSheet, Image, Text} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { getInfos } from "../../../store/selectors";
import { getAllTeams } from '../../../store/actions';

const Teams = (league) => {
    console.log('name123',league)

    const dispatch = useDispatch();
    
    const infos = useSelector(getInfos);
    console.log('infos:', infos)

    useEffect(() => {
        dispatch(getAllTeams(league.props))
        console.log('mounted')
    }, [])

    return (
        <View style={StyleSheet.box}>
            <Text style={styles.title}>Toutes les Franchises</Text>
            {infos.allTeams && 
            infos.allTeams.map( team => {
                return (
                    <View style={styles.logo} key={team.idTeam}>
                        <Image
                            style={styles.badge}
                            source={{
                            uri:team.strTeamBadge
                        }}
                         />
                        <Text>{team.strTeam}</Text>
                    </View>
                )
            }
            )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    box : {
        display: "flex",
        flexDirection: "row"
    },
    badge : {
        width: 50,
        height: 50
    },
    logo : {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        padding: 25,
    },
    title : {
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Teams;