import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY } from '../constants';

export const fetchCompanyOverview = createAsyncThunk('/stocks/info/fetchCompanyOverview', async (company: string) => {
    console.log('company', company)
    const API_URL = 'https://www.alphavantage.co/query';
    const data = {
        function: 'OVERVIEW',
        symbol: company,
        apikey: API_KEY,
    }
    const response = await axios.get(API_URL, { params: data });
    console.log('response.data', response.data)
    return response.data;
})
