import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Animated} from 'react-native';
import Typography from '../Texts/Typography';
import {WHITE,BLUE,BLACK} from '../../Constants/Colors';

const AnimatedCard = ({
  onPress,
  data,
  imageStyle,
  animationStyle,
  indexValue,
  isRestart,
}) => (
  <TouchableOpacity onPress={onPress}>
    <Animated.View
      style={[
        isRestart?animationStyle:
        data.item.index == indexValue ? animationStyle : {},
        !data.item.status
          ? [imageStyle, {backgroundColor: BLUE}]
          : [imageStyle, {backgroundColor: WHITE}],
      ]}>
      <Typography
        // text={data.item.number?.toString()}
        text={ !data.item.status?"?":data.item.number?.toString()}
        fontWeight="normal"
        fontSize={20}
        lineHeight={19}
        textAlign="left"
        color={!data.item.status ? WHITE : BLACK}
        fontWeight="600"
      />
    </Animated.View>
  </TouchableOpacity>
);

AnimatedCard.propTypes = {
  onPress: PropTypes.func,
  data: PropTypes.object,
  imageStyle: PropTypes.object,
  animationStyle: PropTypes.object,
  isRestart:PropTypes.bool,
};

export default React.memo(AnimatedCard);
