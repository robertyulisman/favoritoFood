import {View, Text} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import {logoutUser, setCurrentUser} from '../../Redux/actions/authAction';
import {useDispatch} from 'react-redux';

const Auth = ({navigation}) => {
  const dispatch = useDispatch();
  const checkToken = async () => {
    const jwtToken = await AsyncStorage.getItem('jwtToken');

    if (jwtToken) {
      const userData = jwt_decode(jwtToken);
      // set auth token header auth
      setAuthToken(jwtToken);
      // decode token and get user info and exp

      // set user and isAuthenticated
      dispatch(setCurrentUser(userData));

      const currentime = Date.now() / 1000;

      if (userData.exp < currentime) {
        alert('time out, please login again');

        dispatch(logoutUser());
        return navigation.navigate('Auth');
      }

      return navigation.navigate('Home');
    } else {
      return navigation.navigate('Auth');
    }
  };

  React.useEffect(() => {
    checkToken();
  }, []);

  return null;
};

export default Auth;
