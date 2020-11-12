import React , { useCallback } from "react";
import { View, StyleSheet, Text, Linking} from "react-native";
import { IconButton, Colors } from 'react-native-paper';

const OpenURLButton = ({ url, reseau, color }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <IconButton
            icon={reseau}
            color={color}
            size={50}
            onPress={handlePress} />;
  }; 

const SocialNetworks = (infos) => {

    const {strWebsite, strFacebook, strTwitter, strYoutube} = infos;
    
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.text}>clique sur les icones pour rejoindre les pages officielles de la league</Text>
            <View style={styles.container}>
                <OpenURLButton url={`https://${strFacebook}`} reseau="facebook-box" color={Colors.blue500}/>
                <OpenURLButton url={`https://${strTwitter}`} reseau="twitter-box" color={Colors.blue500}/>
                <OpenURLButton url={`https://${strYoutube}`} reseau="youtube" color={Colors.red500}/>
                <OpenURLButton url={`https://${strWebsite}`} reseau="web" color={Colors.black500}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        display : 'flex',
        flexDirection: 'row'
    },
    text : {
        textAlign: 'center'
    },
    mainContainer : {
        margin : 10,
        borderTopColor : 'black',
        borderTopWidth: 5,
        borderBottomWidth: 5,
        padding: 5

    }
})

export default SocialNetworks;