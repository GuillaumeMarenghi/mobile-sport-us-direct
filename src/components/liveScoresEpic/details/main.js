import React, {useEffect} from 'react';
import { View, Text } from 'react-native';

const Detail = ({route}) => {

    const { eventId } = route.params;
    console.log('eventId:', eventId)

    return(
        <View>
            <Text>page détail</Text>
        </View>
    )
}

export default Detail; 