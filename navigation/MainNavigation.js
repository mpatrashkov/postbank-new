import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, MaterialTopTabBar } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import LeaderboardsScreen from "../screens/LeaderboardsScreen";
import RewardsScreen from "../screens/RewardsScreen";
import TabBarIcon from "../components/TabBarIcon";
import NavigationTitle from '../components/NavigationTitle';
import Colors from '../Colors';
import { View } from "react-native";
import SignInScreen from '../screens/SignInScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen
});
HomeStack.navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name="home" />
    )
}

const LeaderboardsTopNavigation = createMaterialTopTabNavigator({
    Week: {
        screen: LeaderboardsScreen,
        params: {
            period: "week"
        }
    },
    Month: {
        screen: LeaderboardsScreen,
        params: {
            period: "month"
        }
    },
    Year: {
        screen: LeaderboardsScreen,
        params: {
            period: "year"
        }
    }
}, {
    tabBarComponent: props => (
        <MaterialTopTabBar {...props} style={{ backgroundColor: "#fff", color: "#000" }}/> 
    ),
    tabBarOptions: {
        labelStyle: {
            color: "#000"
        },
        indicatorStyle: {
            backgroundColor: Colors.secondary
        }
    }
});

LeaderboardsTopNavigation.navigationOptions = {
    title: "Leaderboards"
}

const LeaderboardsStack = createStackNavigator({
    Leaderboards: LeaderboardsTopNavigation
}, {
    navigationOptions: {
        headerTitle: <NavigationTitle text="Leaderboards" />
    }
});
LeaderboardsStack.navigationOptions = {
    tabBarLabel: "Leaderboards",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name="format-list-numbered" />
    )
}

const RewardsStack = createStackNavigator({
    Rewards: RewardsScreen,
});
RewardsStack.navigationOptions = {
    tabBarLabel: "Rewards",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name="trophy" />
    )
}

const BottomNavigation = createBottomTabNavigator({
    HomeStack,
    LeaderboardsStack,
    RewardsStack
});

BottomNavigation.navigationOptions = {
    header: null
}

export default createStackNavigator({
    // Signin: SignInScreen,
    Main: BottomNavigation
})