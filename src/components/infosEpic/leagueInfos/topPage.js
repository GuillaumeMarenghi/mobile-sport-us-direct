import React from "react";
import { View, StyleSheet, Image, Text} from "react-native";

const TopPage = ({banner, leagueName}) => {
    return (
        <View>
        <Image
        style={styles.badge}
        source={{
            uri:banner
        }}
        />
        <Text style={styles.title}>{leagueName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    badge: {
        height: 100,
        width: '100%'
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 1.5
    }
    
})

export default TopPage;