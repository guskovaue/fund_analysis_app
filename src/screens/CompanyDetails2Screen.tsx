import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import styles from '../styles';
import { State } from '../types';
import SeparatedList from '../components/SeparatedList';
import { CompanyInfo } from '../types';
import { useRoute } from '@react-navigation/native';
import { CompaynyDetails2RouteProp } from '../types';

const significantValues = ['DividendDate', 'PERatio', 'EBITDA', 'ForwardPE'];

export default (): React.ReactElement => {
  const companyOverviews = useSelector((state: State) => state.companyOverview) as CompanyInfo;
  const route = useRoute<CompaynyDetails2RouteProp>();
  const companyName = route.params.params.companyName;

  return (
    <View style={styles.companyDetails2Screen}>
      <Text style={styles.titleText}> </Text>
      <SeparatedList companyInfo={companyOverviews[companyName]} significantValues={significantValues} />
      <View style={{ flex: 1 }}></View>
    </View>
  );
};
