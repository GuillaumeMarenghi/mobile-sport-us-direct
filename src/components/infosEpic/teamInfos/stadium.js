import React from "react";
import { Text, StyleSheet, View, Image} from "react-native";

const Stadium = ({team}) => {
console.log('team:', team)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Les {team.strTeam} ont été crée en {team.intFormedYear}. Ils jouent au {team.strStadium}, stade d'une capacité
            de {team.intStadiumCapacity}, situé a {team.strStadiumLocation} </Text>
            <Image
            style={styles.img}
            source={{uri: team.strStadiumThumb}}
      />
        </View>
    )
}

const styles = StyleSheet.create({
    text : {
        textAlign: 'center',
        marginHorizontal: 5
    },
    img : {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 18,
        width: '90%',
        height: 200,
    },
    container : {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Stadium;