import List from '../Component/list';
import PropTypes from 'prop-types';

const MyFiles = ({navigation}) => {
  return <List navigation={navigation} myFilesOnly={true} />;
};

MyFiles.propTypes = {
  navigation: PropTypes.object,
};

export default MyFiles;
