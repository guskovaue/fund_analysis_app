import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles';
import SaveButton from '../components/SaveButton/SaveButton';
import { useNavigation } from '@react-navigation/native';
import { createAddNewCompanyAction } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../types';
import { FAIL_ADD_NEW_COMPANY, MY_COMPANIES } from '../constants';
import { fetchCompanyOverview } from '../store/thunks';

export default (): React.ReactElement => {
    const navigation = useNavigation();
    const companiesList = useSelector((state: State) => state.companiesNames);
    const dispatch = useDispatch();
    const [companyName, onChangeCompanyName] = useState('');

    const canAddCompany = !companiesList.includes(companyName);

    const onPress = () => canAddCompany ?
        dispatch(createAddNewCompanyAction(companyName)) &&
        dispatch(fetchCompanyOverview(companyName)) &&
        navigation.navigate(MY_COMPANIES) :
        navigation.navigate(FAIL_ADD_NEW_COMPANY, { companyName });

    return (
        <View style={styles.companyDetailsScreen}>
            <Text style={styles.titleText}>Company name</Text>
            <TextInput
                style={styles.input}
                value={companyName}
                onChangeText={onChangeCompanyName}
                placeholder={'  Input company name'}
            />
            <View style={{ flex: 1 }}></View>
            <SaveButton
                onPress={onPress}
                title='Save'
            />
        </View>
    );
};
