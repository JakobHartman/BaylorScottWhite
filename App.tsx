/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the Redux TypeScript template
 * https://github.com/rahsheen/react-native-template-redux-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';

import { UsersList } from './src/features';
import { styles } from './App.styles';
import { Header } from './src/components';
import { IconButton } from './src/components';
import { fetchUsers } from './src/features/users/redux';
import { useAppDispatch } from './src/app/hooks';

const App = () => {
  const dispatch = useAppDispatch();

  const fetch = () => {
    console.log('Refreshing...');
    dispatch(fetchUsers());
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header
          displayText={'Normal Corp User Directory'}
          navButton={<IconButton iconName={'refresh'} onClick={fetch} />}
        />
        <View style={styles.body}>
          <UsersList />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
