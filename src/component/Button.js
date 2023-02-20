import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import {TextTitle} from './Text';

const Button = ({title, loading, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={{
        backgroundColor: loading ? colors.grayscale.one : colors.primary.four,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 40,
      }}>
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <TextTitle title={title} style={{color: colors.black}} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
