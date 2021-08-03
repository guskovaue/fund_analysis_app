import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import styles from '../styles';
import { CompaynyDetails2RouteProp } from '../types';
import { useRoute } from '@react-navigation/native';
import { State } from '../types';
import SeparatedList from '../components/SeparatedList';
import { CompanyInfo } from '../types';

const significantValues = ['Sector', 'DividendDate', 'RevenueTTM', 'ProfitMargin', 'GrossProfitTTM'];

export default (): React.ReactElement => {
  const companiesData = useSelector((state: State) => state.companiesData) as CompanyInfo;
  const route = useRoute<CompaynyDetails2RouteProp>();
  const companyName = route.params.params.companyName;
  console.log(12345)
  console.log('companiesData', companiesData);

  return (
    <View style={styles.companyDetails2Screen}>
      <Text style={styles.titleText}> </Text>
      <SeparatedList companyInfo={companiesData[companyName]} significantValues={significantValues} />
      <View style={{ flex: 1 }}></View>
    </View>
  );
};
