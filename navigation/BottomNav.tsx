import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import Home from '../screens/HomeScreen';
import Lists from '../screens/ListsScreen';
import Trades from '../screens/TradesScreen';
import Account from '../screens/AccountScreen';

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home', icon: 'home'},
    {key: 'lists', title: 'Lists', icon: 'animation'},
    {key: 'trades', title: 'Trades', icon: 'align-vertical-bottom'},
    {key: 'account', title: 'Account', icon: 'account'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    lists: Lists,
    trades: Trades,
    account: Account,
  });

  return (
    <BottomNavigation
      barStyle={{backgroundColor: '#171717'}}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;
