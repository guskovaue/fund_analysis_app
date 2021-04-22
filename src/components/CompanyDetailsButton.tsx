import React from 'react';
import { TouchableOpacity, Text, Image, ImageSourcePropType } from 'react-native';
import styles from '../styles';
import { CLOSE } from '../images'

export default ({
  onPress,
  onPressCancel,
  buttonLabel = 'Add new company',
  buttonImage,
  showCancelButton = true
}:
  {
    onPress: () => void;
    onPressCancel?: () => void;
    buttonLabel?: string;
    buttonImage?: ImageSourcePropType;
    showCancelButton?: boolean
  }): React.ReactElement => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.addNewCompanyButton}>
      { showCancelButton && <TouchableOpacity
        onPress={onPressCancel}
        style={styles.cancel}
      >
        <Image source={CLOSE} />
      </TouchableOpacity>
      }
      { buttonImage ?
        <Image style={styles.plus} source={buttonImage} /> :
        <Text style={styles.companyButtonText}>{buttonLabel} </Text>
      }
    </TouchableOpacity>
  )
};
