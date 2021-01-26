import React from 'react';
import { View, StyleSheet, Text } from "react-native";

const Timeline = ({timeline})=> {
    
    const sanTimeline = timeline.filter(elm => elm.strTimeline === "Goal" || elm.strTimeline === "Card")
    const domEvent = sanTimeline.filter(elm => elm.strHome === 'Yes');
    const extEvent = sanTimeline.filter(elm => elm.strHome === 'No');
    console.log('extEvent:', extEvent)
    

    return(
    <View>
        <Text style={styles.title}>Timeline du match</Text>
        <View >
                {sanTimeline.map( elm => {
                    return(
                        <View key={elm.idTimeline} style={styles.container}>
                            <View style={styles.content}>{elm.strHome == 'Yes' ? <Text>{elm.strPlayer}</Text> : <Text>{  }</Text>}</View>
                            <View style={styles.content}><Text style={styles.time}>{elm.intTime}'</Text></View>
                            <View style={styles.content}>{elm.strHome == 'No' ? <Text>{elm.strPlayer}</Text> : <Text>{  }</Text>}</View>
                        </View>
                    )
                })}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    content : {
        width: "33%",
        marginTop: 15
    },
    time :{
        textAlign: "center"
    },
    title:{
        textAlign: 'center',
        fontSize: 15
    }

})

export default Timeline;