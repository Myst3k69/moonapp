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

type CryptoCardProps = {
  name: string,
  change:string,
};

const CryptoCard = ({name, change}: CryptoCardProps) => {
  return (
    <Card style={change=='gain'? [styles.card,{backgroundColor:'#267F33'}] : [styles.card,{backgroundColor:'#B10707'}] }>
    {/* <Card style={change=='gain'? [styles.card,{color:'green'}] }></Card> */}
      <Card.Content>
        <Title style={styles.textContent}>{name}</Title>
        <Paragraph style={styles.textContent}>
          ADA/USDT : <Text> 1.53$ - +5.45% </Text>
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
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
    color: 'white',
    fontWeight: 'bold',
  },

  loss: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CryptoCard;
