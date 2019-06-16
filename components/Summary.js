import React, { Component } from 'react';
import { View, Text } from "react-native";
import Colors from '../Colors';

class Summary extends Component {
    render() {
        return (
            <View style={{height: 100, backgroundColor: Colors.primary, flexDirection: "row"}}>
                <View style={{flex: 0.5}}>
                    <Text style={{color: "#fff"}}>1000 steps</Text>
                </View>
                <View style={{flex: 0.5}}>
                    <Text style={{color: "#fff"}}>100 kcal</Text>
                </View>
            </View>
        );
    }
}

export default Summary;