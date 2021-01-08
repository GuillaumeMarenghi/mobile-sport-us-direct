import React from "react";
import { useSelector } from "react-redux";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { getInfos } from "../../../store/selectors";

import LeagueSelector from "./leagueSelector";

const Main = () => {

    const infos = useSelector(getInfos);

    const _renderItem = ({ item }) => {
        return (
            <LeagueSelector urlImage={item.badge} name={item.name} id={item.id} />
        )   
    }

    return(
        <View style={styles.container}>
            <View >
                <Text style={styles.title}>Selectionne une league pour voir le classement</Text>
            </View>
            <FlatList
                data={infos.leagues}
                renderItem={_renderItem}
                keyExtractor={item => item.name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: '5%'
    }
  });

export default Main;