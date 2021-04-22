import React from 'react';
import { View, Text, Image } from 'react-native';
import { ROCKET } from '../images';
import CloseButton from '../components/CloseButton';

export default (): React.ReactElement => {
    return (
        <View>
            <Image source={ROCKET} />
            <CloseButton />
            <Text> Oops, something went wrong!</Text>
        </View >
    )
}