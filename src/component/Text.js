import {View, Text, Animated} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

export const TextHeading = ({
  style,
  title,
  numberOfLines,
  adjustsFontSizeToFit,
}) => {
  return (
    <Animated.Text
      numberOfLines={numberOfLines}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      style={{
        color: colors.black,
        fontSize: 28,
        fontFamily: 'Nunito-ExtraBold',
        ...style,
      }}>
      {title}
    </Animated.Text>
  );
};
export const TextTitle = ({
  style,
  title,
  numberOfLines,
  adjustsFontSizeToFit,
  bold,
  ellipsizeMode,
}) => {
  return (
    <Animated.Text
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      style={{
        color: colors.black,
        fontSize: 16,
        fontFamily: bold ? 'Nunito-ExtraBold' : 'Nunito-Bold',
        ...style,
      }}>
      {title}
    </Animated.Text>
  );
};

export const TextBody = ({
  style,
  title,
  numberOfLines,
  adjustsFontSizeToFit,
  ellipsizeMode,
  bold,
}) => {
  return (
    <Animated.Text
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      style={{
        color: colors.black,
        fontSize: 12,
        fontFamily: bold ? 'Nunito-Bold' : 'Nunito-Regular',
        ...style,
      }}>
      {title}
    </Animated.Text>
  );
};
