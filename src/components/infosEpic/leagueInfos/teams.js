import React, {useEffect} from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { getInfos } from "../../../store/selectors";
import { getAllTeams } from '../../../store/actions';

const Teams = ({league, navigation}) => {
    console.log('name123',league)

    const dispatch = useDispatch();
    
    const infos = useSelector(getInfos);

    useEffect(() => {
        dispatch(getAllTeams(league))
        console.log('mounted')
    }, [])

    const _onPress = (team) => {
        navigation.navigate('TeamInfos', {
           team , navigation
        })
    }

    return (
        <View style={StyleSheet.box}>
            <Text style={styles.title}>Toutes les Franchises</Text>
            <Text style={styles.subTitle}>clique sur le logo d'une franchise pour voir tout les détails et les joueurs</Text>
            {infos.allTeams && 
            infos.allTeams.map( team => {
                return (
                    <TouchableOpacity onPress={() => _onPress(team)} key={team.strTeam}>
                    <View style={styles.logo} key={team.strTeam} >
                        <Image
                            style={styles.badge}
                            source={{
                            uri:team.strTeamBadge
                        }}
                         />
                        <Text>{team.strTeam}</Text>
                    </View>
                    </TouchableOpacity>
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
    },
    subTitle : {
        textAlign: 'center',
        fontSize : 10
    }
})

export default Teams;