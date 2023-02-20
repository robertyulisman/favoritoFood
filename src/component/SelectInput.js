import {View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {TextBody, TextTitle} from './Text';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/Feather';

export const SelectInput = React.forwardRef((props, ref) => {
  const {
    onChangeText,
    onFocus,
    onBlur,
    value,
    errorMessage,
    label,
    placeholderTextColor,
    error,
    data,
  } = props;

  const [isSelect, setIsSelect] = React.useState(false);
  const [dataSelect, setdataSelect] = React.useState([]);
  const [dataSelectFilter, setdataSelectFilter] = React.useState([]);
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    setdataSelect(data);
    setdataSelectFilter(data);
  }, []);

  console.log('isSelect', isSelect);

  const handleOnchangeText = value => {
    console.log('value', value);
    setText(value);
    console.log('value', value);
    const filtered = dataSelectFilter.filter(
      item => item.InUomID.toUpperCase().indexOf(value.toUpperCase()) > -1,
    );
    setdataSelect(filtered);
  };

  const handlePressItem = item => {
    console.log('item', item);
    setIsSelect(false);
    setText(item.InUomID);
  };

  return (
    <View style={{width: '100%', paddingHorizontal: 20}}>
      <TextBody title={label} style={{marginVertical: 10}} />
      <View
        style={{
          flexDirection: 'row',
          paddingRight: 10,
          alignItems: 'center',
          borderRadius: 8,
          borderColor: colors.grayscale.two,
          borderWidth: 1,
        }}>
        <TextInput
          ref={ref}
          onFocus={() => setIsSelect(true)}
          onBlur={onBlur}
          value={text}
          onChangeText={handleOnchangeText}
          style={{
            // width: '100%',
            color: colors.black,
            height: 50,

            paddingHorizontal: 10,
            fontFamily: 'Nunito-Regular',
            fontSize: 16,
            flex: 1,
          }}
          placeholderTextColor={placeholderTextColor || colors.grayscale.two}
          placeholder={`enter ${label}`}
          {...props}
        />
        <Icon name="chevron-down" size={22} color={colors.grayscale.three} />
      </View>

      {isSelect && (
        <ScrollView
          nestedScrollEnabled={true}
          style={{
            borderWidth: 1,
            borderColor: colors.grayscale.two,
            borderRadius: 8,
            maxHeight: 300,
            backgroundColor: colors.white,
            position: 'absolute',
            top: 90,
            left: 20,
            right: 20,
            zIndex: 999,
          }}>
          {dataSelect.map(item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  handlePressItem(item);
                }}
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  backgroundColor: colors.grayscale.one,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.grayscale.two,
                }}>
                <TextBody title={item.InUomID} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}

      {error && (
        <TextBody
          title={errorMessage ? errorMessage : `${label} can't be Blank !`}
          style={{marginVertical: 10, color: colors.red}}
        />
      )}
    </View>
  );
});
