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
import {cryptos} from '../constants/datas';
const CryptosCardsLayout: React.FunctionComponent = () => {
  const [topCryptos, setTopCryptos] = useState(cryptos);

  return (
    <ScrollView>
      <View style={styles.container}>
        {topCryptos.map((crypto,i) => {
          return <CryptoCard  key={i} name={crypto.name} change={crypto.change} />;
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
