import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles';
import SaveButton from '../components/Button';
import { CompanyDetails2ScreenTabNavigationProp, CompaynyDetails2RouteProp } from '../types';
import { MY_COMPANIES } from '../constants';

export default ({
  navigation,
  route: { params: { companyName } }
}: {
  navigation: CompanyDetails2ScreenTabNavigationProp,
  route: CompaynyDetails2RouteProp
}): React.ReactElement => {
  const [text, onChangeText] = useState(companyName);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.titleText}>Company name second page</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        placeholder={companyName || 'Add company name'}
      />
      <View style={{ flex: 1 }}></View>
      <SaveButton
        onPress={() => navigation.navigate(MY_COMPANIES)}
        title='Save'
      />
    </View>
  );
};
