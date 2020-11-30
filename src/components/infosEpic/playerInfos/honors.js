import React from "react";
import { Text, StyleSheet, View, Image} from "react-native";

const Honors = (obj) => {

    return(
        <View style={styles.container}>
            <Text><Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>{obj.strSeason}</Text> - <Text style={{fontWeight: 'bold'}}>{obj.strHonour}</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        paddingBottom: 8
    }
})

export default Honors;