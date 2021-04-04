import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles'

export default ({ navigation }: {navigation: any}): React.ReactElement => (
  <View>
    <Button
      title='Go back to My companies'
      onPress={() => navigation.goBack()}
    />
  </View>
)
