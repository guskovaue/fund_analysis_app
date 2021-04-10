import React from 'react';
import { View } from 'react-native';
import styles from '../styles'
import CompanyDetailsButton from '../components/SaveCompanyDetailsButton'
import { MyCompanyScreenNavigationProp } from '../types'

export default ({ navigation }: {navigation: MyCompanyScreenNavigationProp}): React.ReactElement => (
  <View style={styles.row}>
    <CompanyDetailsButton
      title='Add new company'
      onPress={() => navigation.navigate('Add new company')}
    />
  </View>
)
