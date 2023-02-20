import {View, StatusBar, Image} from 'react-native';
import React from 'react';
import colors from '../../../utils/colors';
import {TextBody, TextHeading} from '../../../component/Text';
import {MotiView, AnimatePresence} from 'moti';
import {useDispatch, useSelector} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import {Input, InputPassword} from '../../../component/CustomInput';
import Button from '../../../component/Button';
import {loginUser, resetError} from '../../../Redux/actions/authAction';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state);
  const {isAuthenticated} = useSelector(state => state.auth);
  const {error} = useSelector(state => state);
  const {apiUrl} = data;
  const [ip, setIp] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const [showPassword, setShowPasword] = React.useState(false);
  const [showlIcon, setShowIcon] = React.useState(true);

  const passwordRef = React.useRef();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      employeeId: '',
      password: '',
    },
  });

  React.useEffect(() => {
    if (isAuthenticated) {
      navigation.replace('Home');
      dispatch(resetError());
      setLoading(false);
    }

    if (Object.keys(error).length !== 0) {
      setLoading(false);
    }
  }, [isAuthenticated, error]);

  const handleLogin = async data => {
    setLoading(true);

    dispatch(loginUser(data));
    setLoading(false);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <AnimatePresence>
        {showlIcon && (
          <MotiView
            from={{opacity: 0, translateY: 100}}
            animate={{opacity: 1, translateY: 0}}
            transition={{delay: 20}}>
            <Image
              style={{width: 150, height: 150}}
              resizeMode="contain"
              source={require('../../../asset/images/logo.png')}
            />
          </MotiView>
        )}
      </AnimatePresence>

      <View style={{width: '100%'}}>
        <View style={{paddingHorizontal: 20}}>
          <TextHeading title="Login User" />
          <TextBody
            style={{color: colors.grayscale.three}}
            title="Please Login before you can access the app"
          />
        </View>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              label="ID Employee"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors?.employeeId || error?.message}
              onSubmitEditing={() => passwordRef.current.focus()}
              errorMessage={error?.message}
              onFocus={() => {
                dispatch(resetError());
              }}
            />
          )}
          name="employeeId"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <InputPassword
              ref={passwordRef}
              label="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors?.password}
              showPassword={showPassword}
              onShowPassword={() => setShowPasword(show => !show)}
              onSubmitEditing={handleSubmit(handleLogin)}
              onFocus={() => {
                dispatch(resetError());
              }}
            />
          )}
          name="password"
        />

        <Button
          title="Submit"
          loading={loading}
          onPress={handleSubmit(handleLogin)}
        />
      </View>
    </View>
  );
};

export default Login;
