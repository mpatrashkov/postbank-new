import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Navigation from "./navigation/AppNavigation";
import { Provider } from 'mobx-react';
import RootStore from './store/store';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={new RootStore()}>
          <Navigation style={styles.navigation}/>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    backgroundColor: "#ff0011"
  },
  container: {
    flex: 1,
    backgroundColor: '#ff0011',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});