import React, {useEffect, useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, Text, Linking, Button } from "react-native";
import { ActivityIndicator } from 'react-native-paper';

import { getHighlights } from '../../../store/actions/actionsHighlights';
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
    }, [])

    return(
        <View style={styles.container}>
            <View>{allLeagueHighlights
            ?
            <View style={styles.video}>
                {allLeagueHighlights.map(elm => {
                    return(
                    <View key={elm.strVideo} style={styles.section}>
                        <Text style={styles.title}>{elm.strEvent}</Text>
                        <Text>{elm.dateEvent}</Text>
                        <VideoPlayer yt={elm.strVideo}/>
                        <URLButton
                            url={elm.strVideo}
                        />
                    </View>
                    )
                })}              
            </View>
            :   
            <ActivityIndicator animating={true} style={styles.loading} />}</View> 
        </View>
    )
}

export const URLButton = ({ url }) => {
    const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return (
       <Button
            title="voir la video sur youtube"
            onPress={handlePress} 
        />
    )
  }; 

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
    },
    section : {
        marginBottom: 23
    }
})

export default Video