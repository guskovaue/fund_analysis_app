import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import styles from '../styles';
import { CompaynyDetails2RouteProp } from '../types';
import { useNavigation, useRoute } from '@react-navigation/native';
import { fetchCompanyOverview } from '../store/thunks';
import { State } from '../types';
import SeparatedList from '../components/SeparatedList';

export default (): React.ReactElement => {
  // const companyOverview = useSelector((state: State) => state.companyOverview);
  const companyOverview = {
    "Address": "One New Orchard Road, Armonk, NY, United States, 10504",
    "AnalystTargetPrice": "143.63",
    "AssetType": "Common Stock",
    "Country": "USA",
    "Currency": "USD",
    "DilutedEPSTTM": "5.978",
    "DividendDate": "2021-06-10",
    "DividendPerShare": "6.52",
    "DividendYield": "0.0452",
    "EBITDA": "15822000128",
    "EPS": "5.978",
    "Exchange": "NYSE",
    "FiscalYearEnd": "December",
    "ForwardAnnualDividendRate": "6.56",
    "ForwardAnnualDividendYield": "0.0455",
    "ForwardPE": "13.1926",
    "Industry": "Information Technology Services",
    "MarketCapitalization": "129274904576",
    "Name": "International Business Machines Corporation",
    "OperatingMarginTTM": "0.1232",
    "PEGRatio": "1.5513",
    "PERatio": "24.2021",
    "PayoutRatio": "0.7593",
    "PercentInsiders": "0.136",
    "PercentInstitutions": "58.194",
    "PriceToBookRatio": "6.0227",
    "PriceToSalesRatioTTM": "1.7552",
    "ProfitMargin": "0.0728",
    "QuarterlyEarningsGrowthYOY": "-0.192",
    "QuarterlyRevenueGrowthYOY": "0.009",
    "ReturnOnAssetsTTM": "0.0376",
    "ReturnOnEquityTTM": "0.2536",
    "RevenuePerShareTTM": "82.734",
    "RevenueTTM": "73779003392",
    "Sector": "Technology",
    "ShortRatio": "4.96",
    "Symbol": "IBM",
  }

  console.log('companyOverview', companyOverview)
  const isLoading = useSelector((state: State) => state.loading);
  const navigation = useNavigation();
  const route = useRoute<CompaynyDetails2RouteProp>();
  const companyName = route.params.params.companyName;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchCompanyOverview(companyName))
    }
  }, [companyName])
  // should I look for isLoading changes. And how if it'll loop my code

  // const PERatio = companyOverview.PERatio.toString();
  // const sector = companyOverview.Sector;

  return (
    <View style={styles.companyDetails2Screen}>
      <Text style={styles.titleText}>Fundamental indicators</Text>
      <SeparatedList companyInfo={companyOverview} />
      <View style={{ flex: 1 }}></View>
    </View>
  );
};
