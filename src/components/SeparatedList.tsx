import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';
import { CompanyInfo } from '../types';

export default ({ companyInfo, significantValues }: { companyInfo: CompanyInfo; significantValues: string[] }): React.ReactElement => {
    const isSignificantValue = (parameterName: string) => significantValues.includes(parameterName);
    const tranformParameterName = (parameterName: string) => parameterName.split(/(?=[A-Z][a-z])/).join(' ');

    return (
        <View >
            <View>
                {
                    Object.keys(companyInfo).filter(isSignificantValue).map((parameterName) => (
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.text}>{tranformParameterName(parameterName)}</Text>
                                <Text style={styles.text}>{companyInfo[parameterName]}</Text>
                            </View>
                            <View style={styles.bottomLine} />
                        </View>
                    )
                    )
                }
            </View>
        </ View >
    )
}