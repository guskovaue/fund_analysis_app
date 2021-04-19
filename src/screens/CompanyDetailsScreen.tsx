import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles';
import SaveButton from '../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CompanyDetailsRouteProp } from '../types';
import { createAddNewCompanyAction } from '../store/actions';
import { useDispatch } from 'react-redux';
import { MY_COMPANIES } from '../constants';

export default (): React.ReactElement => {
  const navigation = useNavigation();
  const route = useRoute<CompanyDetailsRouteProp>();
  const companyName = route.params.companyName;

  const dispatch = useDispatch();
  const [text, onChangeText] = useState(companyName);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.titleText}>Company name</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        placeholder={companyName || 'Add company name'}
      />
      <View style={{ flex: 1 }}></View>
      <SaveButton
        onPress={() => dispatch(createAddNewCompanyAction(text)) && navigation.navigate(MY_COMPANIES)}
        title='Save'
      />
    </View>
  );
};
