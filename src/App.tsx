import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CompanyDetailsScreen from './screens/CompanyDetailsScreen';
import HomeScreen from './screens/MyCompaniesScreen';
import { StackParamList } from './types';
import { createStore } from 'redux';
import reducers from './store/reducers';
import { Provider } from 'react-redux';
import { EDIT_COMPANY } from './store/actions';

const { Navigator, Screen } = createStackNavigator<StackParamList>();
const store = createStore(reducers);

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator initialRouteName='My companies'>
          <Screen
            name='My companies'
            component={HomeScreen}
          />
          <Screen
            name={EDIT_COMPANY}
            component={CompanyDetailsScreen}
          />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
