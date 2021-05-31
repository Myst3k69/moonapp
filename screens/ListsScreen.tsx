/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/colors';

const Lists: React.FunctionComponent = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={{color:'white'}}>Lists</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#000',
  },
});

export default Lists;
