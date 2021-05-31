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
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MainPortFolioCard from '../components/MainPortfolioCard';
import CryptosCardsLayout from '../components/CryptosCardsLayout'
import Main from '..';

const HomeScreen: React.FunctionComponent = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MainPortFolioCard/>
        <CryptosCardsLayout/>
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

export default HomeScreen;
