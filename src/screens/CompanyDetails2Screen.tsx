import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import styles from '../styles';
import { CompaynyDetails2RouteProp } from '../types';
import { useRoute } from '@react-navigation/native';
import { State } from '../types';
import SeparatedList from '../components/SeparatedList';
import { CompanyInfo } from '../types';

const significantValues = ['DividendDate', 'PERatio', 'EBITDA', 'ForwardPE'];

export default (): React.ReactElement => {
  const companyOverview = useSelector((state: State) => state.companyOverview) as CompanyInfo;
  // const isLoading = useSelector((state: State) => state.loading);
  // const route = useRoute<CompaynyDetails2RouteProp>();
  // const companyName = route.params.params.companyName;

  return (
    <View style={styles.companyDetails2Screen}>
      <Text style={styles.titleText}> </Text>
      <SeparatedList companyInfo={companyOverview} significantValues={significantValues} />
      <View style={{ flex: 1 }}></View>
    </View>
  );
};
