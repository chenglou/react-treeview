import React, { Component } from 'react';
import { StatusBar, AppRegistry, StyleSheet, Text, View } from 'react-native';
import Uncontrolled from './uncontrolled';
import Controlled from './controlled';

export default class ReactNativeTreeview extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Uncontrolled />
        <View style={{ padding: 20 }} />
        <Controlled />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
});
