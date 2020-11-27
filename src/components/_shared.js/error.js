import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Error = () => {
    return(
        <View style={styles.container}>
            <Text>Erreur serveur</Text>
            <Text>Impossible de charger le données, vérifiez que vous êtes bien connecté à internet </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'red',
        padding: 20,
        borderRadius: 10,
        margin: 10,
        textAlign: 'center'
    }
})

export default Error;