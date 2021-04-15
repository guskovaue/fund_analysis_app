import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStore } from 'redux';
import reducers from './store/reducers';
import { Provider } from 'react-redux';
import { StackNavigator } from './navigation/StackNavigator';

const store = createStore(reducers);

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
