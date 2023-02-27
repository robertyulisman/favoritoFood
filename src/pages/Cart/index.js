import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import Header from '../../component/Header';
import {TextBody, TextTitle} from '../../component/Text';
import Button from '../../component/Button';
import colors from '../../utils/colors';

const data = [
  {
    _id: 1,
    name: 'Sans Antonio',
    kecamatan: 'Lubuk Baja',
    address: 'Jl. Permata Regency Blok 16 No 5',
  },
  {
    _id: 2,
    name: 'Hendra Wijaya',
    kecamatan: 'Lubuk Baja',
    address: 'Jl. Permata Regency Blok 16 No 5',
  },
  {
    _id: 3,
    name: 'Edward Marcelino',
    kecamatan: 'Lubuk Baja',
    address: 'Jl. Permata Regency Blok 16 No 5',
  },
];
const Cart = () => {
  const handleOpenDetail = item => {
    console.log('item', item);
  };
  return (
    <SafeAreaView>
      <Header />

      <FlatList
        data={data}
        keyExtractor={item => `${item._id}-pesanan`}
        renderItem={({item, index}) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: colors.white,
              paddingVertical: 10,
              paddingLeft: 20,
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View>
              <TextTitle title="Sans Antonio" />
              <TextBody title="Jl. Permata Regency Blok 16 No 5" />
            </View>
            <Button
              onPress={() => handleOpenDetail(item)}
              containerStyle={{
                marginTop: 0,
                width: 100,
                backgroundColor: colors.secondary.one,
              }}
              title="Detail"
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Cart;
