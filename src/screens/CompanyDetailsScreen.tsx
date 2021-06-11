import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import styles from '../styles';
import { CompaynyDetails2RouteProp } from '../types';
import { useNavigation, useRoute } from '@react-navigation/native';
import { fetchCompanyOverview } from '../store/thunks';
import { State } from '../types';
import SeparatedList from '../components/SeparatedList';
import { CompanyInfo } from '../types';

export default (): React.ReactElement => {
  const companyOverview = useSelector((state: State) => state.companyOverview) as CompanyInfo;

  const isLoading = useSelector((state: State) => state.loading);
  // const navigation = useNavigation();
  const route = useRoute<CompaynyDetails2RouteProp>();
  const companyName = route.params.params.companyName;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchCompanyOverview(companyName))
    }
  }, [companyName])
  // should I look for isLoading changes. And how if it'll loop my code

  return (
    <View style={styles.companyDetails2Screen}>
      <Text style={styles.titleText}>Fundamental indicators</Text>
      <SeparatedList companyInfo={companyOverview} />
      <View style={{ flex: 1 }}></View>
    </View>
  );
};
