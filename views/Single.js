import React from 'react';
import {StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import {uploadUrl} from '../utils/variables';

const Single = ({route}) => {
  const {title, description, filename, time_added: timeAdded} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{title}</Text>
      <Image
        style={{width: 400, height: 380}}
        source={{uri: uploadUrl + filename}}
      />
      <Text>{description}</Text>
      <Text>{timeAdded}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
