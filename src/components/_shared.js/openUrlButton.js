import React , { useCallback } from "react";
import { Linking} from "react-native";
import { IconButton } from 'react-native-paper';

const OpenURLButton = ({ url, reseau, color }) => {
    const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return (
       <IconButton
            icon={reseau}
            color={color}
            size={50}
            onPress={handlePress} 
        />
    )
        
  }; 

export default OpenURLButton;