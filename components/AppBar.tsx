import * as React from 'react';
import {Appbar} from 'react-native-paper';

const AppBar = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={{backgroundColor: '#000'}}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="MOON" subtitle="Crypto management" />
      <Appbar.Action icon="bell" onPress={_handleSearch} />
    </Appbar.Header>
  );
};

export default AppBar;
