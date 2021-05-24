import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import PropTypes from 'prop-types';

const ScreenLayout = ({
  header,
  paddingTop,
  paddingBottom,
  paddingHorizontal,
  useSafeArea: enableSafeView,
  neverForceInset,
  scrollable,
  children,
  ...props
}) => {
  const safeAreaInsets = useSafeArea();
  const contentArea = () => {
    if (scrollable) {
      return (
        <ScrollView
          style={{marginTop: paddingTop, paddingBottom, paddingHorizontal}}
          contentContainerStyle={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          {...props}>
          {children}
        </ScrollView>
      );
    } else {
      return (
        <View
          style={[
            styles.container,
            {paddingTop, paddingBottom, paddingHorizontal},
          ]}
          {...props}>
          {children}
        </View>
      );
    }
  };

  const defaultInset = {
    // if header is included set it to 0, header layout will have its safe area
    paddingTop: header ? 0 : safeAreaInsets.top,
    paddingRight: safeAreaInsets.right,
    paddingBottom: safeAreaInsets.bottom,
    paddingLeft: safeAreaInsets.left,
  };

  let forceInsets =
    neverForceInset && neverForceInset.length
      ? neverForceInset.reduce(
          (m, inset) => {
            let paddingString = '';

            // although tecnically right and left have a 0 value anyway, we maintain this,
            // because it could have a value in landscape mode (which we don't support)
            if (inset === 'top') {
              paddingString = 'paddingTop';
            }
            if (inset === 'right') {
              paddingString = 'paddingRight';
            }
            if (inset === 'bottom') {
              paddingString = 'paddingBottom';
            }
            if (inset === 'left') {
              paddingString = 'paddingLeft';
            }

            return {
              ...m,
              [paddingString]: 0,
            };
          },
          {
            ...defaultInset,
          },
        )
      : {...defaultInset};

  return (
    <View style={[styles.container, enableSafeView ? forceInsets : null]}>
      {header}
      {contentArea()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

ScreenLayout.propTypes = {
  paddingBottom: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  paddingTop: PropTypes.number,
  header: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
  useSafeArea: PropTypes.bool,
  neverForceInset: PropTypes.arrayOf(PropTypes.string),
  scrollable: PropTypes.bool,
};

ScreenLayout.defaultProps = {
  paddingBottom: 36,
  c: 24,
  paddingTop: 16,
  useSafeArea: false,
  neverForceInset: null,
  scrollable: false,
};

const Memoiz = React.memo(ScreenLayout);

export default Memoiz;
