import {View, Image, StatusBar} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import {TextTitle} from '../../component/Text';

const Splash = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 5000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
      }}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Image
        style={{width: 240, height: 120}}
        source={require('../../asset/favoritoLogo.png')}
        resizeMode="contain"
      />
      <TextTitle style={{fontSize: 12, position:'absolute', bottom: 20}} title="Version 1.0.0" />
    </View>
  );
};

export default Splash;
