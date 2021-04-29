import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../styles';

export default ({ onPress, title }: { onPress: () => void; title: string }): React.ReactElement => (
  <TouchableOpacity onPress={onPress} style={styles.saveButton}>
    <Text style={styles.saveButtonText}>{title}</Text>
  </TouchableOpacity>
);
