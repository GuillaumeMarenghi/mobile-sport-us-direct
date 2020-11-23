import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import { ActivityIndicator, Colors } from 'react-native-paper';

import { getHighlights } from '../../../store/actionsHighlights';
import { getStoreHighlights } from '../../../store/selectors'

import VideoPlayer from './videoPlayer';

const Video = ({league}) => {

    const dispatch = useDispatch();
    const highlights = useSelector(getStoreHighlights);
    
    let allLeagueHighlights;
    switch (league) {
        case 'NBA':
            allLeagueHighlights = highlights.NBAhighlights;
            break;
        case 'NFL':
            allLeagueHighlights = highlights.NFLhighlights;
            break;
        case 'MLB':
            allLeagueHighlights = highlights.MLBhighlights;
            break;
        case 'NHL':
            allLeagueHighlights = highlights.NHLhighlights;
        break;
        case 'American Major League Soccer':
            allLeagueHighlights = highlights.MLShighlights;
        break;
        default:
            null
    }

    useEffect(() => {
        dispatch(getHighlights(league));
        console.log('highlights:', highlights)
    }, [])

    return(
        <View style={styles.container}>
            <Text>{allLeagueHighlights
            ? 
            <View style={styles.video}>
                {allLeagueHighlights.map(elm => {
                    return(
                    <View key={elm.strVideo}>
                    <Text style={styles.title}>{elm.strEvent}</Text>
                    <Text>{elm.dateEvent}</Text>
                    <VideoPlayer yt={elm.strVideo}/>
                    </View>
                    )
                })}              
            </View>
            :   
            <ActivityIndicator animating={true} style={styles.loading} />}</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        alignItems : "center",
        justifyContent : "center"
    },
    video : {
        padding: 20
    },
    title : {
        fontWeight : 'bold'
    },
    loading: {
        padding: 25
    }

})

export default Video