import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextBody, TextTitle} from './Text';
import colors from '../utils/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const Input = React.forwardRef((props, ref) => {
  const {
    onChangeText,
    onFocus,
    onBlur,
    value,
    errorMessage,
    label,
    placeholderTextColor,
    error,
  } = props;

  return (
    <View style={{width: '100%', paddingHorizontal: 20}}>
      <TextBody title={label} style={{marginVertical: 10}} />
      <TextInput
        ref={ref}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChangeText={onChangeText}
        style={{
          borderWidth: 1,
          width: '100%',
          borderRadius: 8,
          height: 50,
          borderColor: colors.grayscale.two,
          color: colors.black,
          paddingHorizontal: 10,
          fontFamily: 'Nunito-Regular',
          fontSize: 16,
        }}
        placeholderTextColor={placeholderTextColor || colors.grayscale.two}
        placeholder={`enter ${label}`}
        {...props}
      />
      {error && (
        <TextBody
          title={errorMessage ? errorMessage : `${label} can't be Blank !`}
          style={{marginVertical: 10, color: colors.red}}
        />
      )}
    </View>
  );
});
export const InputPassword = React.forwardRef((props, ref) => {
  const {
    onChangeText,
    onFocus,
    onBlur,
    value,
    label,
    placeholderTextColor,
    error,
    showPassword,
    onShowPassword,
  } = props;
  return (
    <View style={{width: '100%', paddingHorizontal: 20, marginTop: 10}}>
      <TextBody title={label} style={{marginVertical: 10}} />
      <View
        style={{
          borderWidth: 1,
          width: '100%',
          borderRadius: 8,
          height: 50,
          borderColor: colors.grayscale.two,
          color: colors.black,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          ref={ref}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          secureTextEntry={showPassword}
          onChangeText={onChangeText}
          style={{
            flex: 1,
            height: 50,
            borderColor: colors.grayscale.two,
            color: colors.black,
            paddingHorizontal: 10,
            fontFamily: 'Nunito-Regular',
            fontSize: 16,
          }}
          placeholderTextColor={placeholderTextColor || colors.grayscale.two}
          placeholder={`enter ${label}`}
          {...props}
        />
        <TouchableOpacity style={{marginRight: 10}} onPress={onShowPassword}>
          <MaterialIcon
            name={showPassword ? 'visibility' : 'visibility-off'}
            size={24}
            color={colors.grayscale.three}
          />
        </TouchableOpacity>
      </View>
      {error && (
        <TextBody
          title={`${label} can't be Blank !`}
          style={{marginVertical: 10, color: colors.red}}
        />
      )}
    </View>
  );
});
