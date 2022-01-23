import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { getTicket, postTicket } from '../mockAPI';

export const createTicketSlice = createSlice({
  name: 'createTicket',
  initialState: {
    ticket: [],
  },
  extraReducers: {
    [postTicket.fulfilled]: (state, action) => {
      state.ticket = action.payload;
    },
    [postTicket.rejected]: () => 'Opps there seems to be an error',
  },
});

export const postSlice = createSlice({
  name: 'getTicket',
  initialState: {
    ticket: [],
  },
  extraReducers: {
    [getTicket.fulfilled]: (state, action) => {
      state.ticket = action.payload;
    },
    [getTicket.rejected]: () => 'Opps there seems to be an error',
  },
});

export const reducer = combineReducers({
  createTicket: createTicketSlice.reducer,
  postTicket: postSlice.reducer,
});
