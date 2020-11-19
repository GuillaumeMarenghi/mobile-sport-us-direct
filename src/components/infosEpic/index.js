import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Infos from './main';
import LeagueInfos from './leagueInfos';
import TeamInfos from './teamInfos';
import PlayerInfos from './playerInfos';

const Stack = createStackNavigator();

const InfosStack = () => {
    return(
    
        <Stack.Navigator>
            <Stack.Screen name="Infos" component={Infos} />
            <Stack.Screen name="LeagueInfos" component={LeagueInfos} />
            <Stack.Screen name="TeamInfos" component={TeamInfos} />
            <Stack.Screen name="PlayerInfos" component={PlayerInfos} />
        </Stack.Navigator>
    
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20
    },
  });

export default InfosStack;