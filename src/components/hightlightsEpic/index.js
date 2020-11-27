import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";

import Main from './main';

const Stack = createStackNavigator();

const InfosStack = () => {
    return(  
        <Stack.Navigator>
            <Stack.Screen name="Highlights" component={Main} />
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