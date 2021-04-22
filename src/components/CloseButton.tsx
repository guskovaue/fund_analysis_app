import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image } from 'react-native';
import styles from '../styles';
import { CLOSE } from '../images';
import { MY_COMPANIES } from '../constants';

export default (): React.ReactElement => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(MY_COMPANIES)} style={styles.cancel}>
            <Image source={CLOSE} />
        </TouchableOpacity>
    )
};
