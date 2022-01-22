import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { getTicket, postTicket } from '../mockAPI';

export const createTicketSlice = createSlice({
  name: 'createTicket',
  initialState: {
    ticket: [],
    isLoading: false,
  },
  extraReducers: {
    [getTicket.pending]: (state) => {
      state.isLoading = true;
    },
    [getTicket.fulfilled]: (state, action) => {
      state.ticket = action.payload;
      state.isLoading = false;
    },
    [getTicket.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const postSlice = createSlice({
  name: 'postTicket',
  initialState: {
    ticket: [],
    isLoading: false,
  },
  extraReducers: {
    [postTicket.pending]: (state) => {
      state.isLoading = true;
    },
    [postTicket.fulfilled]: (state, action) => {
      state.ticket = action.payload;
      state.isLoading = false;
    },
    [postTicket.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const reducer = combineReducers({
  createTicket: createTicketSlice.reducer,
  postTicket: postSlice.reducer,
});

