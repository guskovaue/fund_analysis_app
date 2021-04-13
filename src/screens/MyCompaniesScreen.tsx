import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../styles'
import CompanyDetailsButton from '../components/SaveCompanyDetailsButton'
import { MyCompanyScreenStackNavigationProp, State } from '../types'
import { EDIT_COMPANY } from '../store/actions'

export default ({ navigation }: { navigation: MyCompanyScreenStackNavigationProp }): React.ReactElement => {
  const companiesNames: string[] = useSelector((state: State ) => state.companiesNames );

  return (
  <View style={styles.row}>
    { companiesNames.map((company, index) => (
      <CompanyDetailsButton
      title={company}
      onPress={ () => navigation.navigate( EDIT_COMPANY, { id: index + 1, companyName: company })}
    />
    ))}
    <CompanyDetailsButton
      title='Add new company'
      onPress={() => navigation.navigate( EDIT_COMPANY, { })}
    />
  </View>
  )
}
