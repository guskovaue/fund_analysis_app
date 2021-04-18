import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from '../styles';

export default ({ onPress, title }: { onPress: () => void; title: string } ): React.ReactElement => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.addNewCompanyButton}>
      <Text style={styles.companyButtonText}>{title}</Text>
      <Image
        source={require('../images/cancel.png')}
        style={styles.cancel}
      />
    </TouchableOpacity>
  )
};
