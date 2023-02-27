import {View, Text, Image} from 'react-native';
import React from 'react';
import {TextBody, TextTitle} from '../../../component/Text';
import {Input, InputPassword} from '../../../component/CustomInput';
import Button from '../../../component/Button';
import colors from '../../../utils/colors';


const Login = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  const [form, setForm] = React.useState({
    username: '',
    password: '',
  });

  const handleOnChange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };

  const handleSubmit = () => {
    console.log('form', form);
    navigation.navigate('Home');
  };
  return (
    <View style={{flex: 1}}>
      <Image
        resizeMode="contain"
        style={{width: 200, height: 150, alignSelf: 'center'}}
        source={require('../../../asset/favoritoLogo.png')}
      />
      <TextTitle
        style={{
          color: colors.primary.one,
          fontWeight: 'bold',
          fontSize: 22,
          alignSelf: 'center',
        }}
        title="Login"
      />
      <Input
        value={form.username}
        placeholder="Masukkan Username"
        onChangeText={value => handleOnChange(value, 'username')}
      />
      <InputPassword
        onShowPassword={() => setShow(!show)}
        showPassword={show}
        on
        onChangeText={value => handleOnChange(value, 'password')}
        value={form.password}
        placeholder="Masukkan Password"
      />
      <Button onPress={handleSubmit} title="Selanjutnya" />
      <View
        style={{
          paddingHorizontal: 20,
          position: 'absolute',
          bottom: 20,
          width: '100%',
        }}>
        <TextBody
          style={{textAlign: 'center'}}
          title="Jika anda belum memiliki akun, silahkan hubungi admin dan ajukan pendaftaran akun."
        />
      </View>
    </View>
  );
};

export default Login;
