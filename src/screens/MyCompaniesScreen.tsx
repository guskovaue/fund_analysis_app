import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';
import CompanyDetailsButton from '../components/CompanyDetailsButton/CompanyDetailsButton';
import { State } from '../types';
import { COMPANY_DETAILS, FUNDAMENTAL } from '../constants';
import { PLUS } from '../images'
import { createDeleteCompanyAction } from '../store/actions';
import { useDispatch } from 'react-redux';
import { MY_COMPANIES, NAME_COMPANY_INPUT } from '../constants';

export default (): React.ReactElement => {
  const [isEditMode, setIsEditMode] = useState(false);
  const companiesList: string[] = useSelector((state: State) => state.companiesNames);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (companiesList.length === 0) setIsEditMode(false);
  }, [companiesList]);

  return (
    <TouchableWithoutFeedback onPress={() => setIsEditMode(false)}>
      <View style={styles.myCompaniesScreen}>
        {companiesList.map((company) => {
          return <CompanyDetailsButton
            isEditMode={isEditMode}
            buttonLabel={company}
            onLongPress={() => setIsEditMode(true)}
            onPressDelete={() => {
              dispatch(createDeleteCompanyAction(company));
              navigation.navigate(MY_COMPANIES)
            }}
            onPress={() => navigation.navigate(
              COMPANY_DETAILS,
              {
                screen: FUNDAMENTAL,
                params:
                  { companyName: company }
              }
            )}
          />
        })}
        <CompanyDetailsButton
          isEditMode={isEditMode}
          buttonImage={PLUS}
          onPress={() => navigation.navigate(NAME_COMPANY_INPUT)}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}
