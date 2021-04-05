import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

export default ({ onPress, title }: { onPress: () => void; title: string } ): React.ReactElement => (
  <TouchableOpacity onPress={onPress} style={styles.addNewCompanyButton}>
    <Text style={styles.companyButtonText}>{title}</Text>
  </TouchableOpacity>
);