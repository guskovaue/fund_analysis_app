import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from '../styles';
import { useDispatch } from 'react-redux';
import { createDeleteCompanyAction } from '../store/actions';

export default ({ 
  onPress, 
  buttonLabel='Add new company', 
  showCancelButton=true 
}: 
{ 
  onPress: () => void; 
  buttonLabel?: string;
  showCancelButton?: boolean
}): React.ReactElement => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={onPress} style={styles.addNewCompanyButton}>
      { showCancelButton && <TouchableOpacity 
        onPress={() => dispatch(createDeleteCompanyAction(buttonLabel))} 
        style={styles.cancel}
      >
        <Image
          source={require('../images/cancel.png')}
        />
      </TouchableOpacity>
      }
      <Text style={styles.companyButtonText}>{buttonLabel}</Text>
    </TouchableOpacity>
  )
};
