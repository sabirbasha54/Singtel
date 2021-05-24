import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {useSafeArea} from 'react-native-safe-area-context';

const TRANSPARENT = 'transparent';

const HeaderLayout = ({
  headerLeftElement,
  headerCenterElement,
  headerRightElement,
  horizontalPaddingMode,
  backgroundColor,
  ...props
}) => {
  const safeAreaInsets = useSafeArea();

  const style = [
    styles.container,
    {
      backgroundColor,
      paddingTop: safeAreaInsets.top,
      height: 70 + safeAreaInsets.top,
    },
  ];
  if (horizontalPaddingMode) {
    style.push(styles.screenPadding);
  }

  return (
    <View style={style} {...props}>
      <View style={[styles.headerSmallElement, {alignItems: 'flex-start'}]}>
        {headerLeftElement}
      </View>
      <View style={[styles.headerSmallElement, {alignItems: 'flex-end'}]}>
        {headerRightElement}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 7,
    width: '100%',
  },
  formPadding: {
    paddingHorizontal: 24,
  },
  headerMainElement: {
    flex: 0.8,
  },
  headerSmallElement: {
    alignItems: 'center',
    flex: 0.4,
    justifyContent: 'center',
  },
  screenPadding: {
    paddingHorizontal: 24,
  },
});

HeaderLayout.propTypes = {
  headerLeftElement: PropTypes.element,
  headerCenterElement: PropTypes.element,
  headerRightElement: PropTypes.element,
  horizontalPaddingMode: PropTypes.oneOf(['form', 'screen', 'custom']),
  backgroundColor: PropTypes.string,
};

HeaderLayout.defaultProps = {
  horizontalPaddingMode: 'screen',
  backgroundColor: TRANSPARENT,
};

const Memoiz = React.memo(HeaderLayout);

export default Memoiz;
