import React from 'react';
import { View, Text, Image } from 'react-native';
import { ROCKET } from '../images';

export default (): React.ReactElement => {
    return (
        <View>
            <Image source={ROCKET} />
            <Text>'Oops, something went wrong!'</Text>
        </View>
    )
}