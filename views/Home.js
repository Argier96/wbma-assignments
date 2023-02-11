import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import List from '../Component/list';
import PropTypes from 'prop-types';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <List navigation={navigation} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25,
  },
});

Home.propTypes = {
  navigation: PropTypes.object,
};
export default Home;
