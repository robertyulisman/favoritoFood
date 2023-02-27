import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import {TextTitle} from './Text';

const Button = ({title, loading, onPress, containerStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={{
        backgroundColor: loading ? colors.grayscale.one : colors.primary.one,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 40,
        ...containerStyle
      }}>
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <TextTitle title={title} style={{color: colors.white, textAlign:'center'}} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
