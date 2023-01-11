import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListItem from './listItem';
import {baseUrl} from '../utils/variables';

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(baseUrl + 'media');
      const json = await response.json();
      const media = await Promise.all(
        json.map(async (file) => {
          const fileResponse = await fetch(baseUrl + 'media/' + file.file_id);
          return await fileResponse.json();
        })
      );
      setMediaArray(media);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return (
    <>
      <FlatList
        data={mediaArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ListItem singleMedia={item} />}
      />
    </>
  );
};

export default List;
