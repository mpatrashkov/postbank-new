import React, { Component } from 'react';
import { View, Text, Button } from "react-native";
import { Google } from 'expo';
import { fetchPost } from '../lib';
import { inject } from 'mobx-react';
// import AsyncStorage from '@react-native-community/async-storage';

class SignInScreen extends Component {
    static navigationOptions = {
        title: "Sign In"
    }

    state = {
        isSigninInProgress: false,
        userInfo: {}
    }

    signIn = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: "977535412978-8u4m0at7rjldvsllhsojggjep4srl2bb.apps.googleusercontent.com",
                scopes: ["profile", "email", "https://www.googleapis.com/auth/fitness.activity.read",
                        "https://www.googleapis.com/auth/fitness.activity.write",
                        "https://www.googleapis.com/auth/fitness.blood_glucose.read",
                        "https://www.googleapis.com/auth/fitness.blood_glucose.write",
                        "https://www.googleapis.com/auth/fitness.blood_pressure.read",
                        "https://www.googleapis.com/auth/fitness.blood_pressure.write",
                        "https://www.googleapis.com/auth/fitness.body.read",
                        "https://www.googleapis.com/auth/fitness.body.write",
                        "https://www.googleapis.com/auth/fitness.body_temperature.read",
                        "https://www.googleapis.com/auth/fitness.body_temperature.write",
                        "https://www.googleapis.com/auth/fitness.location.read",
                        "https://www.googleapis.com/auth/fitness.location.write",
                        "https://www.googleapis.com/auth/fitness.nutrition.read",
                        "https://www.googleapis.com/auth/fitness.nutrition.write",
                        "https://www.googleapis.com/auth/fitness.oxygen_saturation.read",
                        "https://www.googleapis.com/auth/fitness.oxygen_saturation.write",
                        "https://www.googleapis.com/auth/fitness.reproductive_health.read",
                        "https://www.googleapis.com/auth/fitness.reproductive_health.write"]
            });

            if (result.type === "success") {
                // this.props.store.token = result.accessToken;
                // AsyncStorage.set
                return result.accessToken;
            }
            else {
                return { cancelled: true }
            }
        }
        catch (e) {
            return { error: true }
        }
    }

    onClick = async () => {
        const result = await this.signIn();
        if (result.cancelled) {

        }
        else if (result.error) {

        }
        else {
            let data = await fetch("http://192.168.43.27:9999/auth/signin", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: result
                })
            });
            let res = await data.json();
            
            this.props.navigation.replace("Main");
        }
    }

    render() {
        return (
            <View style={{ paddingHorizontal: 50, marginTop: 120 }}>
                {/* <Text>123</Text> */}
                <Button style={{ width: "90%" }} onPress={this.onClick} title="Sign in with Google"></Button>
                {/* <Text>{this.props.store.token}</Text> */}
            </View>
        );
    }
}

export default SignInScreen;