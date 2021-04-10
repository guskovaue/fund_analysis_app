import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AddNewCompanyScreen from './screens/CompanyDetailsScreen';
import HomeScreen from './screens/MyCompaniesScreen';
import { StackParamList } from './types';
import { createStore } from 'redux';
import reducers from './store/reducers';
import { Provider } from 'react-redux';

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
            name='Add new company'
            component={AddNewCompanyScreen}
          />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
