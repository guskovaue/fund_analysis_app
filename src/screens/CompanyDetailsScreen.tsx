import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles';
import SaveButton from '../components/Button';
import { AddNewCompanyScreenNavigationProp } from '../types';
import { createAddNewCompanyAction } from '../store/actions';
import { useDispatch } from 'react-redux';
import { Tabs, Tab } from 'native-base';

export default ({ 
  navigation, 
  route: { params: { companyName }}
}: { 
  navigation: AddNewCompanyScreenNavigationProp, 
  route: {params: { id: number; companyName: string }}
}):React.ReactElement => {
  const dispatch = useDispatch();
  const [ text, onChangeText ] = useState(companyName);

  return (
    <View style={{ flex: 1 }}>
      <Text style={ styles.titleText }>Company name</Text>
      <TextInput
        style={ styles.input }
        value={ text }
        onChangeText={ onChangeText }
        placeholder={ companyName || 'Add company name' }
      />
      <View style={{ flex: 1 }}></View>
      <SaveButton 
        onPress={() => dispatch(createAddNewCompanyAction(text)) && navigation.navigate('My companies')}
        title='Save'
      />
      <Tabs>
        <Tab
          heading='Tab1'>
        </Tab>
        <Tab
          heading='Tab2'>
        </Tab>
      </Tabs>
    </View>
  );
};
