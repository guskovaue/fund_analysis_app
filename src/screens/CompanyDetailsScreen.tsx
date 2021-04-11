import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles';
import SaveButton from '../components/Button';
import { AddNewCompanyScreenNavigationProp } from '../types';
import { createAddNewCompanyAction } from '../store/actions';
import { useDispatch } from 'react-redux';

export default ({ 
  navigation, 
  route 
}: { 
  navigation: AddNewCompanyScreenNavigationProp, 
  route: { params: { id: number; companyName: string }}
}):React.ReactElement => {
  const dispatch = useDispatch();
  const [ text, onChangeText ] = useState('');
  console.log('route.companyName', route, route.params.companyName)
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.titleText}>Company name</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        placeholder={route.params.companyName || 'Add company name'}
        placeholderTextColor='black'
      />
      <View style={{ flex: 1 }}/>
      <SaveButton
        onPress={() => dispatch(createAddNewCompanyAction(text)) && navigation.navigate('My companies')}
        title='Save'
      />
    </View>
  );
};
