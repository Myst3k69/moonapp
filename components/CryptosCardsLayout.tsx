/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import CryptoCard from '../components/CryptoCard';

const CryptosCardsLayout: React.FunctionComponent = () => {
  const [topCryptos, setTopCryptos] = useState([
    { name: 'ADA', change:'gain'},
    { name: 'XRP', change:'loss'},
    { name: 'ETH', change:'gain'},
    { name: 'FTM', change:'gain'},
    { name: 'ONT', change:'gain'},
    { name: 'MATIC', change:'loss'},
    { name: 'QTUM', change:'loss'},
    { name: 'FIRO', change:'loss'},
    { name: 'NEO', change:'gain'},
    { name: 'GRT', change:'gain'},
    { name: 'TRX', change:'loss'},
    { name: 'LTC', change:'gain'},
    { name: 'ETC', change:'gain'},
    
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {topCryptos.map(crypto => {
          return <CryptoCard  name={crypto.name} change={crypto.change}/>;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#267F33',
    borderWidth: 4,
    width: '50%',
  },

  textContent: {
    color: 'whitesmoke',
    textAlign: 'center',
  },
  gain: {
    color: 'green',
    fontWeight: 'bold',
  },

  loss: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default CryptosCardsLayout;
