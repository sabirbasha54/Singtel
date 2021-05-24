import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {OFF_WHITE} from '../../Constants/Colors';

const ScreenContainer = ({backgroundColor, children}) => {
  const _renderChildren = () => {
    return (
      <View style={[styles.container, {backgroundColor}]}>{children}</View>
    );
  };

  return <React.Fragment>{_renderChildren()}</React.Fragment>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
});

ScreenContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

ScreenContainer.defaultProps = {
  backgroundColor: OFF_WHITE,
};

export default React.memo(ScreenContainer);
