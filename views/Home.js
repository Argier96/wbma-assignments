import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import List from '../Component/list';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <List />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
});

export default Home;
