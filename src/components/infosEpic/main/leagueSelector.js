import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const LeagueSelector = ({name, urlImage}) => {
    console.log(urlImage)
    return(
        <View style={styles.container}>
            <Image
                style={styles.badge}
                source={{
                    uri:urlImage
                }}
            />
            <Text style={styles.name}>
            </Text>
        </View>
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