import React from 'react';
import { View, Text, Image } from 'react-native';
import { ROCKET } from '../images';
import CloseButton from '../components/CloseButton';
import styles from '../styles';

export default (): React.ReactElement => {
    return (
        <View style={styles.errorScreen}>
            <Image source={ROCKET} style={styles.errorScreenRocketImage} />
            <CloseButton />
            <Text style={styles.errorScreenText}> Oops, something went wrong!</Text>
        </View >
    )
}