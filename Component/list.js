import {FlatList} from 'react-native';
import ListItem from './listItem';
import {useMedia} from '../Hooks/ApiHooks';
import PropTypes from 'prop-types';

const List = ({navigation, myFilesOnly = false}) => {
  const {mediaArray} = useMedia(myFilesOnly);
  return (
    <>
      <FlatList
        data={mediaArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <ListItem navigation={navigation} singleMedia={item} />
        )}
      />
    </>
  );
};

List.propTypes = {
  navigation: PropTypes.object.isRequired,
  myFilesOnly: PropTypes.bool,
};

export default List;
