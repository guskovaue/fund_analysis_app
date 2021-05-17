import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';

type CompanyInfo = { Name: string, DividendDate: string, Sector: string, PERatio: string, EBITDA: string };
const significantValues = ['DividendDate', 'PERatio', 'EBITDA'];

export default ({ companyInfo }: { companyInfo: CompanyInfo }): React.ReactElement => {
    console.log('companyInfo', companyInfo)
    const isSignificantValue = (parameterName) => significantValues.includes(parameterName);

    return (
        <View >
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>{'Name'}</Text>
                    <Text style={styles.text}>{companyInfo['Name']}</Text>
                </View>
                <View style={styles.bottomLine} />
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.text}>{'Sector'}</Text>
                    <Text style={styles.text}>{companyInfo['Sector']}</Text>
                </View>
                <View style={styles.bottomLine} />
                {
                    Object.keys(companyInfo).filter(isSignificantValue).map((parameterName) => (
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.text}>{parameterName}</Text>
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