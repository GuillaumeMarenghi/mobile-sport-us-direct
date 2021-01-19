import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, ScrollView, View} from "react-native";

import { getInfos } from "../../../store/selectors";
import { getLeagueInfos } from '../../../store/actions/actions';

import { ActivityIndicator } from 'react-native-paper';

import TopPage from './topPage';
import SocialNetworks from './socialNetworks';
import Teams from './teams';

const LeagueInfos = ({route}) => {

    const { id, name, queryName, navigation } = route.params;
    
    const dispatch = useDispatch();

    const infos = useSelector(getInfos);

    useEffect(() => {
        dispatch(getLeagueInfos(id));
    }, [])

    return(
        <ScrollView style={styles.container}>
            {infos.loading && <ActivityIndicator />}
            {infos.leagueInfos &&
            <View>
                <TopPage banner={infos.leagueInfos.strBanner} leagueName={infos.leagueInfos.strLeagueAlternate} />
                <SocialNetworks infos={infos.leagueInfos}/>
                <Teams league={queryName} navigation={navigation}/>
            </View>
            }
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container : {
        display: 'flex',
        flex:1,
    },  
})


export default LeagueInfos;