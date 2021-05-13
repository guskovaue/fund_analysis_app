import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const initialState = {
//     companiesNames: [],
//     companyOverview: {},
//     status: 'idle',
//     error: null
// }

export const fetchCompanyOverview = createAsyncThunk('/stocks/info/fetchCompanyOverview', async (company) => {
    const response = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${company}&apikey=demo`)
    return response.data;
})

// const companyOverviewSlice = createSlice({
//     name: 'overview',
//     initialState,
//     reducers: {
//         // omit existing reducers here
//     },
//     extraReducers: {
//         [fetchCompanyOverview.pending.type]: (state, action) => { action.status = 'loading' },
//         [fetchCompanyOverview.fulfilled.type]: (state, action) => { action.status = 'succeeded' },
//         [fetchCompanyOverview.rejected.type]: (state, action) => { action.status = 'failed' }
//     }
// })

// export const { } = companyOverviewSlice.actions

// export default companyOverviewSlice.reducer


