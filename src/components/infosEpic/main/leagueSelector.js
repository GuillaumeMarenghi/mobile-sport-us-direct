import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const LeagueSelector = ({name, urlImage, id, navigation}) => {
    return(
        <TouchableOpacity
        onPress={() => {
            navigation.navigate("League Infos", {
              id, name, navigation
            })
        }}
        >
            <View style={styles.container}>
                <Image
                    style={styles.badge}
                    source={{
                        uri:urlImage
                    }}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        display: 'flex',
        flexDirection: 'row',
        flex:1,
        padding: '3%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    badge: {
        height:100,
        width: 100
    }
})

export default LeagueSelector;