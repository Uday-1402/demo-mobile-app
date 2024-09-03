import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';

function AppPro(): JSX.Element {
  let isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView
      style={[styles.container, isDarkMode ? styles.darkBg : styles.lightBg]}>
      <View style = {styles.section}>
        <Text style={{fontSize: 32}}>Flat Cards</Text>
        <FlatCards></FlatCards>
      </View>
      <View style = {styles.section}>
        <Text style={{fontSize: 32}}>Elevated Cards</Text>
        <ElevatedCards></ElevatedCards>
      </View>
      {/* <Text style = {isDarkMode ? styles.whiteText : styles.blackText}>Hello World!!!!</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
    padding:10,
  },
  darkBg: {
    backgroundColor: '#000000',
  },
  lightBg: {
    backgroundColor: '#ffffff',
  },
  whiteText: {
    color: '#ffffff',
  },
  blackText: {
    color: '#000000',
  },
  section:{
    marginBottom: 100,
  }
});

export default AppPro;
