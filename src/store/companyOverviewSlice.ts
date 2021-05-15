import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY } from '../constants';

export const initialState = {
    // companiesNames: [],
    companyOverview: {},
    status: 'idle',
    error: null
}

export const fetchCompanyOverview = createAsyncThunk('/stocks/info/fetchCompanyOverview', async (company) => {
    const API_URL = 'https://www.alphavantage.co/query'

    const data = {
        function: 'OVERVIEW',
        symbol: 'IBM',
        apikey: API_KEY,
    }
    const response = await axios.get(API_URL, { params: data })
    console.log('response', response.data)
    return response.data;
})

const companyOverviewSlice = createSlice({
    name: 'overview',
    initialState,
    reducers: {
        // omit existing reducers here
    },
    extraReducers: {
        // [fetchCompanyOverview.pending.type]: (state, action) => { action.status = 'loading' },
        [fetchCompanyOverview.fulfilled.type]: (state, action) => { state.status = 'succeeded', state.companyOverview = action.payload },
        // [fetchCompanyOverview.rejected.type]: (state, action) => { action.status = 'failed' }
    }
})

// export const { } = companyOverviewSlice.actions

export default companyOverviewSlice.reducer


