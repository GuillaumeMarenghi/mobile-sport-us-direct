import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

const LeagueSelector = ({name, urlImage, id, navigation}) => {
    return(
        <TouchableOpacity
/*         onPress={() => {
            navigation.navigate("League Infos", {
              id, name, navigation
            })
        }} */
        >
            <View style={styles.container}>
                <Image
                    style={styles.badge}
                    source={{
                        uri:urlImage
                    }}
                />
                <Text>voir le classement</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        display: 'flex',
        flexDirection: 'row',
        flex:1,
        padding: '2%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        //borderWidth: 3,
        borderRadius: 15,
        //borderColor: "#bf0d3e50",
        //borderColor: "#041e42",
        marginVertical: 5,
        backgroundColor: "#041e4230"
        //backgroundColor: "#bf0d3e30"
    },
    badge: {
        height:100,
        width: 100,
        marginRight:50
    }
})

export default LeagueSelector;