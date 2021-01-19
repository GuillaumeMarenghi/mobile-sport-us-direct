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
    let query;
    switch (league) {
        case 'Ligue 1 Uber Eats':
            allLeagueHighlights = highlights.L1highlights;
            query = "french%20ligue%201";
            break;
        case 'Ligue 2 BKT':
            allLeagueHighlights = highlights.L2highlights;
            query = "french%20ligue%202";
            break;
        case 'National 1':
            allLeagueHighlights = highlights.N1highlights;
            query = "French%20Championnat%20National";
            break;
        default:
            null
    }

    useEffect(() => {
        dispatch(getHighlights(query));
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