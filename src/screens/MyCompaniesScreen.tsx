import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';
import CompanyDetailsButton from '../components/CompanyDetailsButton/CompanyDetailsButton';
import { State } from '../types';
import { COMPANY_DETAILS, COMPANY_INFO } from '../constants';
import { PLUS } from '../images'
import { createDeleteCompanyAction } from '../store/actions';
import { useDispatch } from 'react-redux';
import { SUCCESS, NAME_COMPANY_INPUT } from '../constants';

export default (): React.ReactElement => {
  const companiesNames: string[] = useSelector((state: State) => state.companiesNames);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={styles.myCompaniesScreen}>
      { companiesNames.map((company) => (
        <CompanyDetailsButton
          buttonLabel={company}
          onPressDelete={() =>
            dispatch(createDeleteCompanyAction(company)) &&
            navigation.navigate(SUCCESS, { text: `Company ${company} is deleted` })
          }
          onPress={() => navigation.navigate(
            COMPANY_DETAILS,
            {
              screen: COMPANY_INFO,
              params:
                { companyName: company }
            }
          )}
        />
      ))}
      <CompanyDetailsButton
        showCancelButton={false}
        buttonImage={PLUS}
        onPress={() => navigation.navigate(NAME_COMPANY_INPUT)}
      />
    </View>
  )
}
