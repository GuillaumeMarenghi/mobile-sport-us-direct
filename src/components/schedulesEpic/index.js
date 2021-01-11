import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";

import Classements from './main';
import Nba from './nba';

const Stack = createStackNavigator();

const InfosStack = () => {
    return(
    
        <Stack.Navigator>
            <Stack.Screen name="Classements" component={Classements} />
            <Stack.Screen name="Classement NBA" component={Nba} />
{/*             <Stack.Screen name="Classement MLB" component={TeamInfos} />
            <Stack.Screen name="Classement NFL" component={PlayerInfos} />
            <Stack.Screen name="Classement NHL" component={PlayerInfos} />
            <Stack.Screen name="Classement MLS" component={PlayerInfos} /> */}
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