import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  View,
} from 'react-native';
import List from '../Component/list';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={{
            height: 300,
            width: 420,
            borderBottomRightRadius: 50,
          }}
          source={require('../assets/325063-800x800-1-mini-beagle-puppy-pictures.webp')}
        ></Image>
        <Text
          style={{
            color: 'white',
            position: 'absolute',
            bottom: 25,
            left: 2.5,
            backgroundColor: 'rgba(0,0,0,0.5)',
            fontSize: 20,
            padding: 10,
          }}
        >
          Random Header
        </Text>
        <Ionicons
          name="settings"
          size="30"
          style={{position: 'absolute', color: 'white', bottom: 250, right: 15}}
        />
      </View>
      <List navigation={navigation} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Home.propTypes = {
  navigation: PropTypes.object,
};
export default Home;
