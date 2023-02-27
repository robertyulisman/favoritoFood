import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
  StatusBar,
} from 'react-native';
import React from 'react';
import {TextBody, TextTitle} from '../../component/Text';
import Button from '../../component/Button';
import colors from '../../utils/colors';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import Header from '../../component/Header';
import Slider from 'react-native-slide-to-unlock';
import {color} from 'react-native-reanimated';
// commit from sefong here

const data = [
  {
    _id: 1,
    name: 'Sans Antonio',
    kecamatan: 'Lubuk Baja',
    address: 'Jl. Permata Regency Blok 16 No 5',
    status: 'sedang dikirim',
  },
  {
    _id: 2,
    name: 'Hendra Wijaya',
    kecamatan: 'Lubuk Baja',
    address: 'Jl. Permata Regency Blok 16 No 5',
    status: 'sedang disiapkan',
  },
  {
    _id: 3,
    name: 'Edward Marcelino',
    kecamatan: 'Lubuk Baja',
    address: 'Jl. Permata Regency Blok 16 No 5',
    status: 'sedang disiapkan',
  },
];

const Dashboard = () => {
  const [dataSelected, setDataSelected] = React.useState(null);
  const bottomSheetRef = React.useRef(null);
  const snapPoints = React.useMemo(() => ['50%', '90%'], []);

  const handleSheetChanges = React.useCallback(index => {
    console.log('index', index);
  });

  const renderBackdrop = React.useCallback(props => (
    <BottomSheetBackdrop
      {...props}
      opacity={0.5}
      BottomSheetModal
      BottomSheetBackdrop
      disappearsOnIndex={-1}
      pressBehavior="close"
    />
  ));

  const handleKonfirmasi = item => {
    setDataSelected(item);
    bottomSheetRef.current?.present();
  };
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={color.white} barStyle="dark-content" />
      <View>
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
                onPress={() => handleKonfirmasi(item)}
                containerStyle={{
                  marginTop: 0,
                  width: 100,
                  backgroundColor:
                    item.status === 'sedang disiapkan'
                      ? colors.blue
                      : colors.primary.one,
                }}
                title={
                  item.status === 'sedang disiapkan'
                    ? 'Proses Pesanan'
                    : 'Konfirmasi Pesanan'
                }
              />
            </View>
          )}
        />
        <View>
          <BottomSheetModal
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            // backgroundStyle={{
            //   borderTopLeftRadius: 0,
            //   borderTopRightRadius: 0,
            //   display: 'none',
            // }}
            onChange={handleSheetChanges}>
            <View style={{backgroundColor: colors.white, flex: 1}}>
              {/* <View style={{width: '100%', height: 250}}>
                <Image
                  source={require('../../asset/map.png')}
                  style={{width: undefined, height: undefined, flex: 1}}
                />

                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    top: 100,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: colors.white,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    alignSelf: 'center',
                  }}>
                  <TextBody
                    style={{color: colors.white}}
                    title="Tunjukkan Arah"
                  />
                </TouchableOpacity>
              </View> */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  marginTop: 20,
                }}>
                <TextTitle title="Pelanggan" />
                <TextTitle title={dataSelected?.name} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  marginTop: 20,
                }}>
                <TextBody title="Kecamatan" />
                <TextBody title={dataSelected?.kecamatan} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  marginTop: 20,
                }}>
                <TextBody title="Alamat" />
                <TextBody title={dataSelected?.address} />
              </View>
              <TextTitle
                style={{marginLeft: 20, marginTop: 20}}
                title="List Pesanan :"
              />
              {dataSelected?.status === 'sedang disiapkan' ? (
                <Button
                  containerStyle={{
                    bottom: 20,

                    position: 'absolute',
                    width: '90%',
                    backgroundColor: colors.blue,
                  }}
                  title="Proses Pesanan"
                />
              ) : (
                <Slider
                  // childrenContainer={{backgroundColor: colors.grayscale.one}}
                  onEndReached={() => {
                    Alert.alert('Attention', 'onEndReached!');
                  }}
                  containerStyle={{
                    margin: 8,
                    backgroundColor: colors.grayscale.light,
                    borderRadius: 10,
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '95%',
                    position: 'absolute',
                    bottom: 20,
                  }}
                  sliderElement={
                    <View
                      style={{
                        width: 50,
                        height: 50,
                        backgroundColor: colors.primary.two,
                        margin: 10,
                        padding: 5,
                        borderRadius: 5,
                      }}>
                      <Image
                        resizeMode="contain"
                        style={{
                          width: undefined,
                          margin: 4,
                          borderRadius: 5,
                          height: undefined,
                          flex: 1,
                        }}
                        source={require('../../asset/icon/slider.png')}
                      />
                    </View>
                  }>
                  <TextBody title="Geser untuk konfirmasi" />
                  <TextTitle title="Pengiriman Selesai" />
                </Slider>
              )}
            </View>
          </BottomSheetModal>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
