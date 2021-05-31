/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';

import Screens from './navigation/Screens';
import BottomNav from './navigation/BottomNav'

const Stack = createStackNavigator();

const App: React.FunctionComponent = () => {
  return (
    <>
    <NavigationContainer>
      {/* <Screens /> */}
    
    </NavigationContainer>
     <BottomNav/>
     </>
  );
};

export default App;
