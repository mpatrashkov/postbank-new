import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from "react-native";
import Colors from '../Colors';

const userAvatarImage = require("../img/user.png");

class LeaderboardPlace extends Component {
    getUserAvatarSize = () => {
        switch(this.props.size) {
            case 1:
                return 40;
            case 2:
                return 50;
            case 3:
                return 60;
            case 4:
                return 70;
        }
    }

    getFontSize = () => {
        switch(this.props.size) {
            case 1:
                return 14;
            case 2:
                return 15;
            case 3:
                return 16;
            case 4:
                return 17;
        }
    }

    getColor = () => {
        return this.props.me ? Colors.primary : "black";
    }

    getFontWeight = () => {
        return this.props.me ? "bold" : "normal";
    }

    render() {
        return (
            <View style={{
                ...styles.leaderboardPlaceContainer,
                height: this.getUserAvatarSize()
                }}>
                <View style={styles.numberContainer}>
                    <Text>#{this.props.number}</Text>
                </View>
                <View style={styles.userAvatarContainer}>
                    <Image style={{
                        width: this.getUserAvatarSize(),
                        height: this.getUserAvatarSize()
                    }} 
                        source={userAvatarImage}/>
                </View>
                <View style={styles.userNameContainer}>
                    <Text style={{ ...styles.userName, fontSize: this.getFontSize(), color: this.getColor(), fontWeight: this.getFontWeight()}}>{this.props.userName}</Text>
                </View>
                <View style={styles.userPointsContainer}>
                    <Text style={{ textAlign: "center", fontSize: this.getFontSize(), color: this.getColor(), fontWeight: this.getFontWeight() }}>{this.props.points}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    numberContainer: {
        flex: 0.1,
        alignItems: "center"
    },
    leaderboardPlaceContainer: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        marginVertical: 5,
        alignItems: "center"
    },
    userAvatarContainer: {
        flex: 0.25,
        alignItems: "center"
    },
    userPointsContainer: {
        flex: 0.2
    },
    userPoints: {
    },
    userName: {
        
    },
    userNameContainer: {
        flex: 0.45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
});

export default LeaderboardPlace;