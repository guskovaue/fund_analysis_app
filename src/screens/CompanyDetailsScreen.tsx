import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles';
import SaveButton from '../components/SaveButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CompanyDetailsRouteProp } from '../types';
import { createAddNewCompanyAction } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../types';
import { FAIL_ADD_NEW_COMPANY, MY_COMPANIES } from '../constants';

export default (): React.ReactElement => {
  const navigation = useNavigation();
  const route = useRoute<CompanyDetailsRouteProp>();
  const companyName = route.params.companyName;
  const companiesNames = useSelector((state: State) => state.companiesNames);
  const dispatch = useDispatch();
  const [text, onChangeText] = useState(companyName);
  const canAddCompany = !companiesNames.includes(text);

  const onPress = () => canAddCompany ?
    dispatch(createAddNewCompanyAction(text)) && navigation.navigate(MY_COMPANIES) :
    navigation.navigate(FAIL_ADD_NEW_COMPANY, { companyName });

  return (
    <View style={styles.companyDetailsScreen}>
      <Text style={styles.inputText}>Company name</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        placeholder={companyName || 'Add company name'}
      />
      <View style={{ flex: 1 }}></View>
      <SaveButton
        onPress={onPress}
        title='Save'
      />
    </View>
  );
};
