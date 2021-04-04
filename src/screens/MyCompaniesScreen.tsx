import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from '../styles'
import AddNewCompanyButton from '../components/AddNewCompanyButton'

export default ({ navigation }: {navigation: any}): React.ReactElement => (
  <View style={styles.row}>
    <AddNewCompanyButton
      title='Add new company'
      onPress={() => navigation.navigate('Add new company')}
    />
  </View>
)
