import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import Main from './main';
/* import Details from './details/main'; */

const Stack = createStackNavigator();

const InfosStack = () => {
    return(
    
        <Stack.Navigator>
            <Stack.Screen name="Scores" component={Main} />
            {/* <Stack.Screen name="Details" component={Details} /> */}
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