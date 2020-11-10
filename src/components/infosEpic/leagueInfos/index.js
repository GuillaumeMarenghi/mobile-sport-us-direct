import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, Text, } from "react-native";
import { getInfos } from "../../../store/selectors";

import { getLeagueInfos } from '../../../store/actions';

const LeagueInfos = ({route}) => {

    const { id } = route.params;
    const dispatch = useDispatch();

    const infos = useSelector(getInfos);

    useEffect(() => {
        dispatch(getLeagueInfos)
    }, [])

    return(
    <View> <Text> league infos {id}</Text></View>
    )
};

export default LeagueInfos;