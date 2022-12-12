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

import { Users } from './src/features';
import { styles } from './App.styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <Users />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
