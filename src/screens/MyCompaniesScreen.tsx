import React from 'react';
import { View } from 'react-native';
import styles from '../styles'
import AddNewCompanyButton from '../components/AddNewCompanyButton'
import { MyCompanyScreenNavigationProp } from '../types'

export default ({ navigation }: {navigation: MyCompanyScreenNavigationProp}): React.ReactElement => (
  <View style={styles.row}>
    <AddNewCompanyButton
      title='Add new company'
      onPress={() => navigation.navigate('Add new company')}
    />
  </View>
)
