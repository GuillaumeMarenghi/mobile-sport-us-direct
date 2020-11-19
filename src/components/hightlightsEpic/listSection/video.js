import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, Text } from "react-native";

import { getHighlights } from '../../../store/actionsHighlights';
import { getStoreHighlights } from '../../../store/selectors'

const Video = ({league}) => {

    const dispatch = useDispatch();
    const highlights = useSelector(getStoreHighlights);
    //console.log('highlights:', highlights)

    useEffect(() => {
        dispatch(getHighlights(league));
    }, [])

    return(
        <View><Text>{highlights.NFLhighlights[0].strEvent}</Text></View>
    )
}

export default Video