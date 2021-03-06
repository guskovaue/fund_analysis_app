import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducers';
import { Provider } from 'react-redux';
import { StackNavigator } from './navigation/StackNavigator';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
