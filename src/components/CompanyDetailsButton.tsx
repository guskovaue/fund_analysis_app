import React from 'react';
import { TouchableOpacity, Text, Image, ImageSourcePropType } from 'react-native';
import styles from '../styles';
import { useDispatch } from 'react-redux';
import { createDeleteCompanyAction } from '../store/actions';
import { CANCEL } from '../images'

export default ({ 
  onPress, 
  buttonLabel='Add new company',
  buttonImage,
  showCancelButton=true 
}: 
{ 
  onPress: () => void; 
  buttonLabel?: string;
  buttonImage?: ImageSourcePropType;
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
          source={CANCEL}
        />
      </TouchableOpacity>
      }
      { buttonImage ? 
        <Image
          style={styles.plus}
          source={buttonImage}
        />: 
        <Text 
          style={styles.companyButtonText}>{buttonLabel}
        </Text> }
    </TouchableOpacity>
  )
};
