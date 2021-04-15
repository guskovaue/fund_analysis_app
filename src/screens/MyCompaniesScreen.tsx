import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../styles';
import CompanyDetailsButton from '../components/SaveCompanyDetailsButton';
import { MyCompanyScreenStackNavigationProp, State } from '../types';
import { COMPANY_DETAILS, COMPANY_INFO } from '../constants';

export default ({ navigation }: { navigation: MyCompanyScreenStackNavigationProp }): React.ReactElement => {
  const companiesNames: string[] = useSelector((state: State ) => state.companiesNames );

  return (
  <View style={styles.row}>
    { companiesNames.map((company) => (
      <CompanyDetailsButton
      title={company}
      onPress={ () => navigation.navigate(
        COMPANY_DETAILS, 
        { screen: COMPANY_INFO, 
          params: 
          { companyName: company }
        }
      )}
    />
    ))}
    <CompanyDetailsButton
      title='Add new company'
      onPress={() => navigation.navigate(
        COMPANY_DETAILS, 
        { screen: COMPANY_INFO, 
          params: {}
        }
      )}
    />
  </View>
  )
}
