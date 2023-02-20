import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Router from './src/router/Router';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-reanimated';
import {Provider} from 'react-redux';
import {persistor, store} from './src/Redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BottomSheetModalProvider>
            <NavigationContainer>
              <Router />
            </NavigationContainer>
          </BottomSheetModalProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
