import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getStoreLastScores } from '../../../store/selectors';
import { clearState } from '../../../store/actions/actionLastScores';
import { useSelector, useDispatch } from "react-redux";


const Timeline = ({timeline})=> {

    const lastScores = useSelector(getStoreLastScores);
    const dispatch = useDispatch();
    const sanTimeline = timeline.filter(elm => elm.strTimeline === "Goal" || elm.strTimeline === "Card")
    
    useEffect(() => {
/*         lastScores.navigation.addListener('beforeRemove', () => {
            console.log("back")
            dispatch(clearState)
            }) */
            console.log('1')
            return () => {
                console.log("clear")
            }
    });

    return(
    <View>
        <Text style={styles.title}>Détails du match</Text>
        <View >
                {sanTimeline.map( elm => {
                    return(
                        <View key={elm.idTimeline} style={styles.container}>
                            <View style={styles.content}>{elm.strHome == 'Yes' ? 
                                <View>
                                <Text>
                                    {elm.strPlayer}
                                    {" "}
                                    {elm.strTimeline === "Goal" ? <Text><MaterialCommunityIcons name="soccer" size={18} /></Text> : null}
                                    {elm.strTimelineDetail === "Yellow Card" ? <Text><MaterialCommunityIcons name="cards" size={18} color="#ffd700" /></Text> : null}
                                    {elm.strTimelineDetail === "Red Card" ? <Text><MaterialCommunityIcons name="cards" size={18} color="red" /></Text> : null}

                                </Text></View> : <Text>{  }</Text>}
                            </View>

                            <View  style={styles.timeCtn} ><Text style={styles.time}>{elm.intTime}'</Text></View>

                            <View style={styles.content}>{elm.strHome == 'No' ? 
                                <View>
                                <Text style={{textAlign: "right"}}>
                                    {elm.strTimeline === "Goal" ? <Text><MaterialCommunityIcons name="soccer" size={18} /></Text> : null}
                                    {elm.strTimelineDetail === "Yellow Card" ? <Text><MaterialCommunityIcons name="cards" size={18} color="#ffd700" /></Text> : null}
                                    {elm.strTimelineDetail === "Red Card" ? <Text><MaterialCommunityIcons name="cards" size={18} color="red" /></Text> : null}
                                    {" "}
                                    {elm.strPlayer}
                                </Text></View> : <Text>{  }</Text>}
                                
                            </View>
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
        marginHorizontal: 10
    },
    content : {
        width: "40%",
        marginTop: 15
    },
    time :{
        textAlign: "center"
    },
    timeCtn: {
        marginTop: 15
    },
    title:{
        textAlign: 'center',
        fontSize: 18
    }

})

export default Timeline;