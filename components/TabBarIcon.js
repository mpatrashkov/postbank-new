import React from 'react';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../Colors";

export default function TabBarIcon(props) {
    return (
        <Icon
            name={props.name}
            size={26}
            style={{ marginBottom: -3 }}
            color={props.focused ? Colors.secondary : "black"}
        />
    );
}