import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import Typography from '../Texts/Typography';
import {WHITE} from '../../Constants/Colors';

const HeaderButton = ({onPress, text}) => (
  <TouchableOpacity onPress={onPress}>
    <Typography
      text={text}
      fontWeight="normal"
      fontSize={20}
      lineHeight={19}
      textAlign="left"
      color={WHITE}
      fontWeight="600"
    />
  </TouchableOpacity>
);

HeaderButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
};

HeaderButton.defaultProps = {
  text: '',
};

export default React.memo(HeaderButton);
