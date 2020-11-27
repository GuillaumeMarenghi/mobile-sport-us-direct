import React from "react";
import { View, StyleSheet } from "react-native";
import { List, Switch } from 'react-native-paper';

import Video from './video';


const main = ({league, icon, color}) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return(
        <View>
            <List.Item
                style={{backgroundColor: `${color}50`, borderBottomWidth: 3, borderBottomColor: `${color}`}}
                title={league}
                description={`highlights ${league}`}
                left={props => <List.Icon {...props} icon={icon} />}
                right={props => <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />}
            />
            {isSwitchOn ?
            <View>
                <Video league={league}/>
            </View>
            : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    section : {
        borderBottomWidth: 2,
        borderBottomColor: "#999",
        height: '20%'
    }
})

export default main;