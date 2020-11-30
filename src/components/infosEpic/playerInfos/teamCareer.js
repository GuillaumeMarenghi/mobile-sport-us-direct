import React from "react";
import { Text, StyleSheet, View, Image} from "react-native";

const TeamCareer = (obj) => {
console.log('obj:', obj)

    return(
        <View style={styles.container}>
            <Text>{obj.strJoined ? obj.strJoined : obj.strYearStart } - {obj.strDeparted ? obj.strDeparted : 'en cours'}</Text>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: obj.strTeamBadge,
                }}
            />
            <Text>{obj.strFormerTeam ? obj.strFormerTeam : obj.strTeam }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tinyLogo : {
        width: 25,
        height: 25,
        marginHorizontal: 10
    },
    container : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "flex-start",
        marginVertical: 6

    }
})

export default TeamCareer;