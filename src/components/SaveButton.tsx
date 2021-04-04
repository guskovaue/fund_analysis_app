import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.saveButton}>
    <Text style={styles.saveButtonText}>{title}</Text>
  </TouchableOpacity>
);