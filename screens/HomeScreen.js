import React, { Component } from 'react';
import { View, Text, ScrollView } from "react-native";
import FullHeightView from '../components/FullHeightView';
import NavigationTitle from '../components/NavigationTitle';
import Summary from '../components/Summary';
import LevelInfo from '../components/LevelInfo';

class HomeScreen extends Component {
    static navigationOptions = {
        title: "Home"
    }

    render() {
        return (
            <ScrollView>
                <Summary></Summary>
                <LevelInfo></LevelInfo>
            </ScrollView>
        )
    }
}

export default HomeScreen;