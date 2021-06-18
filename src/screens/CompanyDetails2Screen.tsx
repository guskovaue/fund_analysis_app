import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import styles from '../styles';
import { State } from '../types';
import SeparatedList from '../components/SeparatedList';
import { CompanyInfo } from '../types';

const significantValues = ['DividendDate', 'PERatio', 'EBITDA', 'ForwardPE'];

export default (): React.ReactElement => {
  const companyOverview = useSelector((state: State) => state.companyOverview) as CompanyInfo;

  return (
    <View style={styles.companyDetails2Screen}>
      <Text style={styles.titleText}> </Text>
      <SeparatedList companyInfo={companyOverview} significantValues={significantValues} />
      <View style={{ flex: 1 }}></View>
    </View>
  );
};
