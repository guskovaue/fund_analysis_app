import React, { useState, useCallback } from 'react';
import { TouchableOpacity, Text, Image, ImageSourcePropType } from 'react-native';
import styles from '../../styles';
import { DELETE } from '../../images'

export default ({
  onPress,
  onPressDelete,
  buttonLabel = 'Add new company',
  buttonImage,
  showCancelButton = true
}:
  {
    onPress: () => void;
    onPressDelete?: () => void;
    buttonLabel?: string;
    buttonImage?: ImageSourcePropType;
    showCancelButton?: boolean
  }): React.ReactElement => {
  const [onLongPressActivated, setOnLongPressActivated] = useState(false);

  const handlePress = useCallback(() => {
    setOnLongPressActivated(false);
    onPress();
  }, [onLongPressActivated, onPress]);

  return (
    <TouchableOpacity
      onLongPress={() => setOnLongPressActivated(true)}
      onPress={handlePress}
      style={styles.companyDetailsButton}
    >
      { onLongPressActivated &&
        showCancelButton &&
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
