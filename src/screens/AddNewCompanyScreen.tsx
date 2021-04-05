import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles'
import SaveButton from '../components/SaveButton'
import { AddNewCompanyScreenNavigationProp } from '../types'

export default ({ navigation }: { navigation: AddNewCompanyScreenNavigationProp }):React.ReactElement => {
  const [ text, onChangeText ] = useState('')
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.titleText}>Company name</Text>
      <TextInput
      style={styles.input}
        value={text}
        onChangeText={onChangeText}
      />
      <View style={{ flex: 1 }}/>
      <SaveButton
        onPress={() => navigation.navigate('My companies')}
        title='Save'
      />
    </View>
  );
};