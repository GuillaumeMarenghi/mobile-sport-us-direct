import React from 'react';
import { View, StyleSheet, Text } from "react-native";

const translate = [
    {en: "Shots on Goal", fr: "Tirs cadrés"},
    {en: "Shots off Goal", fr: "Tirs non cadrés"},
    {en: "Total Shots", fr: "Tirs"},
    {en: "Blocked Shots", fr: "Tirs contrés"},
    {en: "Shots insidebox", fr: "Tirs dans la surface"},
    {en: "Shots outsidebox", fr: "Tirs de loin"},
    {en: "Fouls", fr: "Fautes"},
    {en: "Corner Kicks", fr: "Corners"},
    {en: "Offsides", fr: "Hors jeux"},
    {en: "Ball Possession", fr: "Possession"},
    {en: "Yellow Cards", fr: "Carton(s) jaune(s)"},
    {en: "Red Cards", fr: "Carton(s) rouge(s)"},
    {en: "Goalkeeper Saves", fr: "Arrêt du gardien"},
    {en: "Total passes", fr: "Nombre de passes"},
    {en: "Passes accurate", fr: "Passes réussies"},
    {en: "Passes %", fr: "% passes réussis"}
]

const Stats = ({stats})=> {

    return(
        <View>
            <Text style={styles.title}>Stats du match</Text>
            <View>
                {stats.map(elm => {
                    return (
                        <View key={elm.idStatistic}>
                            <View style={styles.container}>
                                <Text>{elm.intHome}</Text>
                                <Text style={styles.time}>{elm.strStat}</Text>
                                <Text>{elm.intAway}</Text>
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 8
    },
    content : {
        width: "40%",
        marginTop: 15
    },
    time :{
        textAlign: "center"
    },
    timeCtn: {
        marginTop: 15
    },
    title:{
        textAlign: 'center',
        fontSize: 18,
        marginTop: 18
    }

})

export default Stats;