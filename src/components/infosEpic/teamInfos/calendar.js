import React , {useEffect} from "react";
import { Text, StyleSheet, View} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { getTeamCalendar } from "../../../store/actions/actions";
import { getInfos } from "../../../store/selectors";

const Calendar = ({teamId, name}) => {

    const dispatch = useDispatch();
    const infos = useSelector(getInfos);

    useEffect(() => {
        dispatch(getTeamCalendar(teamId));
    }, [])

    return(
        <View style={styles.container}>
            <Text>{infos.lastGame ? <Text style={styles.title}>Derniers résultats</Text> : null}</Text>
            <View>
            {infos.lastGame ? infos.lastGame.map(elm => {
                let result;
                
                if(parseInt(elm.intHomeScore, 10) == parseInt(elm.intAwayScore, 10)) {
                    result = 'égalité';
                } else if(elm.strHomeTeam == name) {
                    result = parseInt(elm.intHomeScore, 10) > parseInt(elm.intAwayScore, 10) ? "Victoire" : "Défaite";
                } else if(elm.strAwayTeam == name){
                    result = parseInt(elm.intHomeScore, 10) < parseInt(elm.intAwayScore, 10) ? "Victoire" : "Défaite";
                }
                return(
                <View key={elm.idEvent} style={styles.line}>
                    <Text>
                        <Text style={result == 'Victoire' && styles.victory || result == 'Défaite' && styles.defeat || result == 'égalité' && styles.draw }>
                            {result} 
                        </Text> {" "}
                        <Text style={styles.team}>{elm.strHomeTeam}</Text> {elm.intHomeScore} - {elm.intAwayScore} <Text style={styles.team}>{elm.strAwayTeam}</Text>
                    </Text>
                </View>
                )
            }) : null}
            </View>
            <Text>{infos.nextGame ? <Text style={styles.title}>Prochaines rencontres</Text> : null}</Text>
            <View>
                {infos.nextGame ? infos.nextGame.map(elm => <Text key={elm.idEvent} style={styles.next}>{elm.strFilename}</Text>) : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    title : {
        fontWeight: 'bold',
        paddingBottom: 15
    },
    victory: {
        color: '#008000',
        fontWeight: 'bold'
    },
    defeat: {
        color: '#FF0000',
        fontWeight: 'bold'
    },
    draw: {
        color: '#333',
        fontWeight: 'bold'
    },
    line: {
        marginVertical: 4
    },
    team: {
        fontStyle: 'italic'
    },
    next: {
        marginVertical: 4
    }
})

export default Calendar;