import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles';
import SaveButton from '../components/Button';
import { AddNewCompanyScreenNavigationProp, State } from '../types';
import { createAddNewCompanyAction } from '../store/actions';
import { useSelector, useDispatch } from 'react-redux';

export default ({ navigation }: { navigation: AddNewCompanyScreenNavigationProp }):React.ReactElement => {
  const dispatch = useDispatch();
  const companies: string[] = useSelector((state: State) => state.companiesNames);
  const [ text, onChangeText ] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.titleText}>Company name</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        placeholder={companies[0]}
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
