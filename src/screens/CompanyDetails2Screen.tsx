import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles';
import SaveButton from '../components/SaveButton/SaveButton';
import { CompaynyDetails2RouteProp } from '../types';
import { MY_COMPANIES } from '../constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import { fetchCompanyOverview } from '../store/companyOverviewSlice';
import { State } from '../types';

export default (): React.ReactElement => {
  const companyOverview = useSelector((state: State) => state.companyOverview);
  const navigation = useNavigation();
  const route = useRoute<CompaynyDetails2RouteProp>();
  const companyName = route.params.params.companyName;
  const dispatch = useDispatch();

  const [text, onChangeText] = useState(companyName);

  useEffect(() => {
    // const response = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${companyName}&apikey=demo`)
    // if (status === 'idle') {
    //   dispatch(fetchCompanyOverview())
    // }
    dispatch(fetchCompanyOverview())
  }, [companyName])

  console.log('companyOverview', companyOverview);

  return (
    <View style={styles.companyDetailsScreen}>
      <Text style={styles.titleText}>Company name second page</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        placeholder={companyName || 'Add company name'}
      />
      <View style={{ flex: 1 }}></View>
      <SaveButton
        onPress={() => navigation.navigate(MY_COMPANIES)}
        title='Save'
      />
    </View>
  );
};
