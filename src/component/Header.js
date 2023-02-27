import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Image
        source={require('../asset/favoritoLogo.png')}
        style={{width: 100, height: 40}}
        resizeMode="contain"
      />
      <TouchableOpacity>
        <Image
          style={{width: 22, height: 22}}
          source={require('../asset/icon/bell.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
