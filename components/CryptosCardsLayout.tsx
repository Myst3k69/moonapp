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
import {Divider} from 'react-native-elements';
import {ScrollView, StyleSheet, View} from 'react-native';

import CryptoCard from '../components/CryptoCard';
import {cryptos} from '../constants/datas';
const CryptosCardsLayout: React.FunctionComponent = () => {
  const [topCryptos, setTopCryptos] = useState(cryptos);

  return (
    <ScrollView>
      <Title style={[styles.textContent, {marginBottom: 5, marginTop: 20}]}>
        Cryptos
      </Title>
      <Divider
        style={{
          borderColor: '#DAD9D7',
          borderBottomWidth: 1,
          marginBottom:20,
        }}
      />
      <View style={styles.container}>
        {topCryptos.map((crypto, i) => {
          return (
            <CryptoCard key={i} name={crypto.name} change={crypto.change} />
          );
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
    width: '100%',
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
