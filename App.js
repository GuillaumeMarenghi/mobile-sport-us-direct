import React from 'react';
import { Provider } from "react-redux";
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import store from './src/store';

import InfosScreen from './src/components/infosEpic';
import Highlights from './src/components/hightlightsEpic/';
import LiveScore from './src/components/liveScoresEpic/';
import Schedules from './src/components/schedulesEpic/';


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Tabs.Navigator
            screenOptions={
              ({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                  let icon;
                  switch (route.name) {
                    case "Infos":
                      icon = "md-information-circle"
                      break;
                    case "Highlights":
                      icon = "md-tv"
                      break;
                    case "Scores":
                      icon = "ios-stopwatch"
                      break;
                    case "Classements":
                      icon = "ios-list"
                      break;
                    default:
                      icon = "ios-list"
                  }

                  return <Ionicons name={icon} size={24} color={color} />
                }
              })
            }>
            <Tabs.Screen name="Scores" component={LiveScore} />
            <Tabs.Screen name="Highlights" component={Highlights}  />
            <Tabs.Screen name="Classements" component={Schedules} />
            <Tabs.Screen name="Infos" component={InfosScreen} />
          </Tabs.Navigator>
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
