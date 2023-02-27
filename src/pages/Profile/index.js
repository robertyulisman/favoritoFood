import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../component/Header';
import colors from '../../utils/colors';
import {TextBody, TextTitle} from '../../component/Text';

const Profile = () => {
  return (
    <SafeAreaView>
      <Header />
      <View>
        <View
          style={{
            backgroundColor: colors.white,
            paddingVertical: 10,
            paddingLeft: 20,

            marginTop: 20,
          }}>
          <TextBody title="Nama Lengkap" />
          <TextTitle style={{marginTop: 10}} title="Sans Antonio" />
        </View>
        <View
          style={{
            backgroundColor: colors.white,
            paddingVertical: 10,
            paddingLeft: 20,

            marginTop: 20,
          }}>
          <TextBody title="No Whatsapp" />
          <TextTitle style={{marginTop: 10}} title="0812 7107 6751" />
        </View>
        <View
          style={{
            backgroundColor: colors.white,
            paddingVertical: 10,
            paddingLeft: 20,

            marginTop: 20,
          }}>
          <TextBody title="BP Kendaraan" />
          <TextTitle style={{marginTop: 10}} title="BP 1234 AH" />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: colors.white,
            paddingVertical: 20,
            paddingLeft: 20,
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TextTitle
            style={{color: colors.primary.one}}
            title="Contact Whatsapp Admin"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: colors.white,
            paddingVertical: 20,
            paddingLeft: 20,
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TextTitle style={{color: colors.primary.one}} title="Logout" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
