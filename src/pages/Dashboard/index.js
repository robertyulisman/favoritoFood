import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import {TextBody, TextTitle} from '../../component/Text';

const {width, height} = Dimensions.get('screen');

const Dashboard = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Image
        style={{width, height: 250, alignSelf: 'center', position: 'absolute'}}
        resizeMode="cover"
        source={require('../../asset/background/backgroundHome.png')}
      />

      <Image
        style={{
          width: 100,
          height: 40,
          alignSelf: 'center',
          marginVertical: 20,
        }}
        resizeMode="contain"
        source={require('../../asset/images/logo2.png')}
      />
      {/* Search Component start */}
      <View
        style={{
          backgroundColor: colors.white,
          marginHorizontal: 14,
          paddingHorizontal: 12,
          paddingVertical: 12,
          borderRadius: 30,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 20,
            height: 20,
            alignSelf: 'center',
            marginRight: 10,
          }}
          resizeMode="contain"
          source={require('../../asset/icon/address.png')}
        />
        <View style={{flexDirection: 'row', flex: 1}}>
          <TextBody bold title="Kirim Ke :" />
          <TextBody
            style={{flex: 1}}
            numberOfLines={1}
            ellipsizeMode="tail"
            title=" Permata Baloi Blok C# No 16 "
          />
        </View>
        <TouchableOpacity
          style={{
            width: 24,
            height: 24,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: 12,
              height: 12,
            }}
            resizeMode="contain"
            source={require('../../asset/icon/arrowBottom.png')}
          />
        </TouchableOpacity>
      </View>
      {/* Search Component finish */}

      {/* Pickup Indicator start */}
      <View
        style={{
          marginHorizontal: 14,
          marginTop: 20,
          borderRadius: 20,
        }}>
        {/* Header */}
        <View
          style={{
            backgroundColor: colors.primary.one,
            paddingVertical: 10,
            overflow: 'hidden',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',

              paddingHorizontal: 10,
            }}>
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              resizeMode="contain"
              source={require('../../asset/icon/pack.png')}
            />
            <View style={{marginLeft: 10, flex: 1}}>
              <TextTitle
                bold
                style={{color: colors.white}}
                title="Pesanan ke 3"
              />
              <TextBody
                ellipsizeMode="tail"
                numberOfLines={1}
                style={{color: colors.white}}
                title={`Sedang diantar ke Permata Baloi Blok c7 No 24, Batam`}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',

              paddingHorizontal: 10,
              paddingTop: 10,
            }}>
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              resizeMode="contain"
              source={require('../../asset/icon/oclock.png')}
            />
            <View style={{marginLeft: 10}}>
              <TextBody
                style={{color: colors.white}}
                title={`2 Jam 53 menit sampai ke tujuan `}
              />
            </View>
          </View>
        </View>

        {/* Body */}
        <View
          style={{
            backgroundColor: colors.white,
            paddingHorizontal: 12,
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row', paddingTop: 5}}>
            <TextBody title="1" />
            <TextBody
              bold
              style={{flex: 2, marginLeft: 10}}
              title="Bento Seafood Snack"
            />
            <TextBody style={{flex: 1, textAlign: 'center'}} title="x2" />
            <TextBody style={{flex: 1}} title="Rp. 15.000" />
          </View>
          <View style={{flexDirection: 'row', paddingTop: 5}}>
            <TextBody title="1" />
            <TextBody
              bold
              style={{flex: 2, marginLeft: 10}}
              title="Bento Seafood Snack"
            />
            <TextBody style={{flex: 1, textAlign: 'center'}} title="x1" />
            <TextBody style={{flex: 1}} title="Rp. 20.000" />
          </View>
          <View style={{flexDirection: 'row', paddingTop: 5}}>
            <TextBody title="1" />
            <TextBody
              bold
              style={{flex: 2, marginLeft: 10}}
              title="Bento Seafood Snack"
            />
            <TextBody style={{flex: 1, textAlign: 'center'}} title="x3" />
            <TextBody style={{flex: 1}} title="Rp. 50.000" />
          </View>
        </View>

        {/* Footer */}
        <View
          style={{
            padding: 12,
            backgroundColor: colors.black,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextBody
              style={{color: colors.white}}
              title="Total Pemesanan :"
              bold
            />
            <TextBody
              style={{color: colors.white}}
              title="Rp. 130.000 untuk 4 item"
            />
          </View>
        </View>
      </View>
      {/* Pickup Indicator finish */}
    </View>
  );
};

export default Dashboard;
