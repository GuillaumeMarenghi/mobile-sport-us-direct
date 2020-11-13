import React from "react";
import { Text, ScrollView} from "react-native";

const TeamInfos = ({route}) => {

    const { team, navigation } = route.params;
    console.log('team:', team)

    return(
        <ScrollView >
            <Text>page de l'équipe</Text>
        </ScrollView>
    )
};




export default TeamInfos;