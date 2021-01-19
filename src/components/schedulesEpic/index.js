import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";

import Classements from './main';
import Ligue from './ligue1';

const Stack = createStackNavigator();

const InfosStack = () => {
    return(
    
        <Stack.Navigator>
            <Stack.Screen name="Classements" component={Classements} />
            <Stack.Screen name="Classement" component={Ligue} />
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