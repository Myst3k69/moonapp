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
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import MainPortFolioCard from '../components/MainPortfolioCard';
import CryptosCardsLayout from '../components/CryptosCardsLayout';
import  AppBar  from '../components/AppBar'

const HomeScreen: React.FunctionComponent = () => {
  return (
    <SafeAreaView>
     <AppBar />
      <View style={styles.container}>
        
        <MainPortFolioCard />
       
        <CryptosCardsLayout />
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
