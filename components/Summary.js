import React, { Component } from 'react';
import { View, Text } from "react-native";
import Colors from '../Colors';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class Summary extends Component {
    render() {
        return (
            <View style={{height: 100, paddingHorizontal: 50, backgroundColor: Colors.primary, flexDirection: "row"}}>
                <View style={{flex: 0.5, justifyContent: "center", alignItems: "center" }}>
                    <Icon name="walk" size={45} color="white"/>                    
                    <Text style={{color: "#fff", fontSize: 20}}>1000 steps</Text>
                </View>
                <View style={{flex: 0.5, justifyContent: "center", alignItems: "center" }}>
                    <Icon name="fire" size={45} color="white"/>
                    <Text style={{color: "#fff", fontSize: 20}}>100 kcal</Text>
                </View>
            </View>
        );
    }
}

export default Summary;