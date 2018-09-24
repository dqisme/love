import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Environment,
  asset,
} from 'react-360';

export default class love extends React.Component {
  render() {
    console.log(Environment);
    console.log(asset);
    Environment.setBackgroundImage(
      asset('./0-tsinghua.jpeg'),
    );
  }
};

AppRegistry.registerComponent('love', () => love);
