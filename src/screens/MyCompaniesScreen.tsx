import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';
import CompanyDetailsButton from '../components/CompanyDetailsButton';
import { State } from '../types';
import { COMPANY_DETAILS, COMPANY_INFO } from '../constants';
import { PLUS } from '../images'

export default (): React.ReactElement => {
  const companiesNames: string[] = useSelector((state: State) => state.companiesNames);
  const navigation = useNavigation();

  return (
    <View style={styles.row}>
      { companiesNames.map((company) => (
        <CompanyDetailsButton
          buttonLabel={company}
          onPress={() => navigation.navigate(
            COMPANY_DETAILS,
            {
              screen: COMPANY_INFO,
              params:
                { companyName: company }
            }
          )}
        />
      ))}
      <CompanyDetailsButton
        showCancelButton={false}
        buttonImage={PLUS}
        onPress={() => navigation.navigate(
          COMPANY_DETAILS,
          {
            screen: COMPANY_INFO,
            params: {}
          }
        )}
      />
    </View>
  )
}
