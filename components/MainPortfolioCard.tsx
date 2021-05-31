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

const MainPortfolioCard: React.FunctionComponent = () => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title style={styles.textContent}>Main portfolio</Title>
        <Paragraph style={styles.textContent}>
          Current day PNL : <Text style={styles.gain}> +50.42$ - +8.10% </Text>
        </Paragraph>
        <Paragraph style={styles.textContent}>
          All time balance :{' '}
          <Text style={styles.loss}> -750.42$ - -12.45%</Text>
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171717',
    marginBottom:10,
    marginTop:20,
  },

  textContent: {
    color: 'whitesmoke',
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

export default MainPortfolioCard;
