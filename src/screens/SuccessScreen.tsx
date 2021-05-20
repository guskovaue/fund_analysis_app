import React from 'react';
import { View, Text, Image } from 'react-native';
import { SUCCESS } from '../images';
import { useRoute } from '@react-navigation/native';
import { SuccessRouteProp } from '../types';
import CloseButton from '../components/CloseButton/CloseButton';
import styles from '../styles';

export default (): React.ReactElement => {
    const route = useRoute<SuccessRouteProp>();
    const text = route.params.text;

    return (
        <View style={styles.successScreen}>
            <Image source={SUCCESS} />
            <CloseButton />
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}