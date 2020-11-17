import React from "react";
import { View, Text } from "react-native";
import { Chip } from 'react-native-paper';

const Tag = ({content, bg, clr, icon}) => {
    return(
        <View>
        <Chip icon={icon ? icon : null} style={{backgroundColor: bg, margin:3}}><Text style={{color : clr}}>{content}</Text></Chip>
        </View>
    )
}

export default Tag;