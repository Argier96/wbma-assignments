import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {uploadUrl} from '../utils/variables';

const ListItem = (props) => {
  const item = props.singleMedia;
  return (
    <TouchableOpacity
      style={{backgroundColor: 'grey', marginTop: 10, height: 400}}
    >
      <Image
        style={{width: 220, height: 380, margin: 10}}
        source={{uri: uploadUrl + item.thumbnails?.w160}}
      />
      <View>
        <Text
          style={{
            fontStyle: 'bold',
            fontSize: 25,
            right: -250,
            top: -370,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            right: -240,
            top: -370,
            marginRight: 250,
            fontSize: 15,
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
};
export default ListItem;
