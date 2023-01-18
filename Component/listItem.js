import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {uploadUrl} from '../utils/variables';

const ListItem = ({singleMedia, navigation}) => {
  const item = singleMedia;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Single', item);
      }}
      style={{backgroundColor: '#242834', marginTop: 10, height: 430}}
    >
      <Image
        style={{
          width: 200,
          height: 380,
          margin: 10,
          borderBottomLeftRadius: 100,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
        source={{uri: uploadUrl + item.thumbnails?.w640}}
      />
      <View>
        <Text
          style={{
            fontStyle: 'bold',
            color: 'white',
            fontSize: 18,
            right: -230,
            top: -380,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            right: -230,
            top: -370,
            marginRight: 250,
            fontSize: 10,
            color: 'white',
          }}
        >
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};
export default ListItem;
