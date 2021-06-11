import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY } from '../constants';

export const fetchCompanyOverview = createAsyncThunk('/stocks/info/fetchCompanyOverview', async (company: string) => {
    const API_URL = 'https://www.alphavantage.co/query';
    const data = {
        function: 'OVERVIEW',
        symbol: company,
        apikey: API_KEY,
    }
    let response
    try {
        response = await axios.get(API_URL, { params: data });
    } catch {
        response = { data: {} }
    }
    return response.data;
})
