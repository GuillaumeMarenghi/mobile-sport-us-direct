import React from "react";
import { useSelector } from "react-redux";
import { ScrollView, StyleSheet } from "react-native";

import ListSection from '../listSection';


const main = () => {
    return(
        <ScrollView>
            <ListSection league="NFL" icon="football" color="#57b5dc"/>
            <ListSection league="NBA" icon="basketball" color="#f6994f"/>
        </ScrollView>
    )
}

export default main;