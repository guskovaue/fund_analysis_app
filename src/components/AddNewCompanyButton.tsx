import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../styles'

export default ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.addNewCompanyButton}>
    <Text style={styles.companyButtonText}>{title}</Text>
  </TouchableOpacity>
);