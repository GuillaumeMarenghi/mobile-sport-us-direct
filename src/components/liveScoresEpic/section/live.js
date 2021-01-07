import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { getLiveScroresNBA, getLiveScroresMLB, getLiveScroresNFL, getLiveScroresNHL, getLiveScroresMLS} from "../../../store/actionLiveScores";
import { getStoreLiveScores} from "../../../store/selectors";

import LiveBox from './liveBox';
import Error from '../../_shared.js/error'

const LiveScores = ({stateValue}) => {

    const dispatch = useDispatch();
    const liveScores = useSelector(getStoreLiveScores);
    console.log('state', liveScores)

    useEffect(() => {
        switch (stateValue){
            case 'NBA':
                dispatch(getLiveScroresNBA());
                break;
            case 'MLB':
                dispatch(getLiveScroresMLB());
                break;
            case 'NFL':
                dispatch(getLiveScroresNFL());
                break;
            case 'NHL':
                dispatch(getLiveScroresNHL());
                break;
            case 'American Major League Soccer':
                dispatch(getLiveScroresMLS());
                break;
            default:
                return;
        };
    }, [stateValue]) 

    return(
        <View style={styles.section}>
            <Text style={styles.title}>Matchs en Live</Text>
            {liveScores.loading && <ActivityIndicator />}
                <View>                   
                    {stateValue == 'NBA' && liveScores.NBAliveScrores ? liveScores.NBAliveScrores.map( game => <LiveBox game={game} key={game.idEvent} />): null}
                    {stateValue == 'MLB' && liveScores.MLBliveScrores ? liveScores.MLBliveScrores.map( game => <LiveBox game={game} key={game.idEvent} />): null}
                    {stateValue == 'NFL' && liveScores.NFLliveScrores ? liveScores.NFLliveScrores.map( game => <LiveBox game={game} key={game.idEvent} />): null}
                    {stateValue == 'NHL' && liveScores.NHLliveScrores ? liveScores.NHLliveScrores.map( game => <LiveBox game={game} key={game.idEvent} />): null}
                    {stateValue == 'MLS' && liveScores.MLSliveScrores ? liveScores.MLSliveScrores.map( game => <LiveBox game={game} key={game.idEvent} />): null}
                    {liveScores.requestError && <Error /> }
                    {!liveScores.eventsInLive && <Text style={styles.noLive}>Aucune rencontre n'a lieu en ce moment</Text>}
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    section : {
    },
    title : {
        backgroundColor: '#bf0d3e',
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 4
    },
    noLive: {
        textAlign: 'center',
        marginVertical: 5
    }

})

export default LiveScores;