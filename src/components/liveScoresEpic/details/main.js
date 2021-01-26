import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, StyleSheet, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { getStoreLastScores } from '../../../store/selectors';
import { getEventDetail } from '../../../store/actions/actionLastScores'

import Header from './header';
import Timeline from './timeline';
import Stats from './stats';


const Detail = ({route}) => {

    const { eventId, game, homeTeam, awayTeam } = route.params;

    const dispatch = useDispatch();
    const state = useSelector(getStoreLastScores);

    useEffect(() => {
        dispatch(getEventDetail(eventId))
    },[])

    return(
        <ScrollView>
            <Header 
            game={game}
            homeTeam={homeTeam}
            awayTeam={awayTeam}
            />
            {state.eventDetailTimeline ? <Timeline timeline={state.eventDetailTimeline}/> : null}
            {state.eventDetailStats ? <Stats/> : null}
        </ScrollView>
    )
}

export default Detail; 