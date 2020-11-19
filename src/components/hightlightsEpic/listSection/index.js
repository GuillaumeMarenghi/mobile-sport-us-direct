import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import { List, Switch } from 'react-native-paper';

import { getHighlights } from '../../../store/actionsHighlights';
import { getStoreHighlights } from '../../../store/selectors'

import Video from './video';


const main = ({league, icon, color}) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

/*     const dispatch = useDispatch();
    const highlights = useSelector(getStoreHighlights);
    console.log('highlights:', highlights)

    useEffect(() => {
        dispatch(getHighlights(league));
    }, []) */

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
        borderBottomColor: "#999"
    }
})

export default main;