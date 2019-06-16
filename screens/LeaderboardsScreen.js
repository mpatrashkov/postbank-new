import React, { Component } from 'react';
import { ScrollView, View } from "react-native";
import NavigationTitle from '../components/NavigationTitle';
import LeaderboardPlace from '../components/LeaderboardPlace';
import { clamp } from '../lib';

const Seperator = () => <View style={{
                                borderBottomColor: "#bbb",
                                borderBottomWidth: 1
                            }}></View>

class LeaderboardsScreen extends Component {
    static navigationOptions = {
        headerTitle: <NavigationTitle text="Leaderboards"/>
    }

    state = {
        people: [{
            name: "Miroslav Patrashkov",
            points: 100,
            currentUser: false
        }, {
            name: "Miroslav Patrashkov",
            points: 100,
            currentUser: false
        }, {
            name: "Miroslav Patrashkov",
            points: 100,
            currentUser: false
        }, {
            name: "Miroslav Patrashkov",
            points: 100,
            currentUser: true
        }, {
            name: "Miroslav Patrashkov",
            points: 100,
            currentUser: false
        }]
    }

    getUserName = () => {
        switch(this.props.navigation.getParam("period", "week")) {
            case "week":
                return "Miroslav Patrashkov";
            case "month":
                return "Georgi Atanasov";
            case "year":
                return "Roskata"
        }
    }

    render() {
        return (
            <ScrollView>
                {this.state.people.map((person, index) => (
                    
                    <LeaderboardPlace 
                        key={index} 
                        size={clamp(5 - index, 1, 4)} 
                        number={index + 1} 
                        userName={person.name} 
                        points={person.points} 
                        me={person.currentUser}/>
                    
                
            ))}
            </ScrollView>
        )
    }
}

export default LeaderboardsScreen;