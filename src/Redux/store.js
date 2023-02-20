import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Redux/reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

// const initialstate = {};

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialstate,
//   applyMiddleware(...middleware),
// );

// export default store;

const initialState = {};
const middleware = [thunk];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(...middleware),
);

// export default store;
export const persistor = persistStore(store);
