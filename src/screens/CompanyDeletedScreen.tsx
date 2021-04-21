import React from 'react';
import { View, Text, Image } from 'react-native';
import { ROCKET } from '../images';
import { useRoute } from '@react-navigation/native';
import { CompanyDeletedRouteProp } from '../types';

export default (): React.ReactElement => {
    const route = useRoute<CompanyDeletedRouteProp>();
    const companyName = route.params.companyName;

    return (
        <View>
            <Image source={ROCKET} />
            <Text>Company {companyName} is deleted</Text>
        </View>
    )
}