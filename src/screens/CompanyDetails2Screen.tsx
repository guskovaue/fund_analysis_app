import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles';
import SaveButton from '../components/SaveButton';
import { CompaynyDetails2RouteProp } from '../types';
import { MY_COMPANIES } from '../constants';
import { useNavigation, useRoute } from '@react-navigation/native';

export default (): React.ReactElement => {
  const navigation = useNavigation();
  const route = useRoute<CompaynyDetails2RouteProp>();
  const companyName = route.params.companyName;

  const [text, onChangeText] = useState(companyName);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.inputText}>Company name second page</Text>
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
