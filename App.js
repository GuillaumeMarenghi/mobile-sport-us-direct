import React from 'react';
import { Provider } from "react-redux";
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import store from './src/store';

import Infos from './src/components/infosEpic/main';
import LeagueInfos from './src/components/infosEpic/leagueInfos';
import TeamInfos from './src/components/infosEpic/teamInfos';
import PlayerInfos from './src/components/infosEpic/playerInfos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Infos" component={Infos} />
            <Stack.Screen name="LeagueInfos" component={LeagueInfos} />
            <Stack.Screen name="TeamInfos" component={TeamInfos} />
            <Stack.Screen name="PlayerInfos" component={PlayerInfos} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
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
