import React from 'react';
import { TouchableOpacity, Text, Image, ImageSourcePropType } from 'react-native';
import styles from '../../styles';
import { DELETE } from '../../images'

export default ({
  onPress,
  onPressDelete,
  buttonLabel = 'Add new company',
  buttonImage,
  isEditMode,
  onLongPress
}:
  {
    onPress: () => void;
    onPressDelete?: () => void;
    buttonLabel?: string;
    buttonImage?: ImageSourcePropType;
    isEditMode?: boolean
    onLongPress?: () => void
  }): React.ReactElement => {
  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      onPress={isEditMode ? null : onPress}
      activeOpacity={isEditMode ? 1 : 0}
      style={styles.companyDetailsButton}
    >
      { isEditMode &&
        <TouchableOpacity
          onPress={onPressDelete}
          style={styles.delete}
        >
          <Image source={DELETE} />
        </TouchableOpacity>
      }
      { buttonImage ?
        <Image style={styles.plus} source={buttonImage} /> :
        <Text style={styles.companyDetailsButtonText}>{buttonLabel} </Text>
      }
    </TouchableOpacity>
  )
};
