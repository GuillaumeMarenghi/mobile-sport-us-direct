import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ScrollView } from "react-native";

import { getStoreLastScores } from '../../../store/selectors';
import { getEventDetail } from '../../../store/actions/actionLastScores'
import { clearState } from '../../../store/actions/actionLastScores';

import Header from './header';
import Timeline from './timeline';
import Stats from './stats';


const Detail = ({route}) => {

    const { eventId, game, homeTeam, awayTeam } = route.params;

    const dispatch = useDispatch();
    const state = useSelector(getStoreLastScores);

    useEffect(() => {
        dispatch(getEventDetail(eventId))
        return () => dispatch(clearState())
    },[])

    return(
        <ScrollView>
            <Header 
            game={game}
            homeTeam={homeTeam}
            awayTeam={awayTeam}
            />
            {state.eventDetailTimeline ? <Timeline timeline={state.eventDetailTimeline}/> : null}
            {state.eventDetailStats ? <Stats stats={state.eventDetailStats}/> : null}
        </ScrollView>
    )
}

export default Detail; 