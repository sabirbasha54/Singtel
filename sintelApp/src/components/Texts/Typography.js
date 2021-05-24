import React from 'react';
import {Text} from 'react-native';
import Proptypes from 'prop-types';
import {BLACK} from '../../Constants/Colors';

const Typography = ({
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  lineHeight,
  letterSpacing,
  textAlign,
  color,
  children,
  text,
  style,
  ...props
}) => {
  return (
    <Text
      allowFontScaling={false}
      style={[
        {
          fontFamily,
          fontSize,
          fontStyle,
          fontWeight,
          lineHeight,
          letterSpacing,
          textAlign,
          color,
        },
        style,
      ]}
      {...props}>
      {children || text}
    </Text>
  );
};

Typography.propTypes = {
  fontSize: Proptypes.number,
  fontFamily: Proptypes.string,
  fontWeight: Proptypes.string,
  fontStyle: Proptypes.string,
  lineHeight: Proptypes.number,
  letterSpacing: Proptypes.number,
  textAlign: Proptypes.string,
  color: Proptypes.string,
  children: Proptypes.element,
  text: Proptypes.string,
  style: Text.propTypes.style,
};

Typography.defaultProps = {
  fontSize: 14,
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: 14,
  letterSpacing: 0,
  textAlign: 'center',
  color: BLACK,
};

const Memoiz = React.memo(Typography);

export default Memoiz;
