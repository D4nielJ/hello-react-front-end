import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  const {
    data: { phrase },
  } = await axios.get('https://r4ndom-greetings.herokuapp.com/v1/greeting');
  return phrase;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: { entities: [], loading: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.entities = [action.payload];
      })
      .addCase(fetchGreeting.pending, (state) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
        }
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle';
          state.error = action.error;
        }
      });
  },
});

export { fetchGreeting };
export default greetingSlice.reducer;
