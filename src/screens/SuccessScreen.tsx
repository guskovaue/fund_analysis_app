import React from 'react';
import { View, Text, Image } from 'react-native';
import { SUCCESS } from '../images';
import { useRoute } from '@react-navigation/native';
import { SuccessRouteProp } from '../types';

export default (): React.ReactElement => {
    const route = useRoute<SuccessRouteProp>();
    const text = route.params.text;

    return (
        <View>
            <Image source={SUCCESS} />
            <Text>{text}</Text>
        </View>
    )
}