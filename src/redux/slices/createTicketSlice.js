import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { postTicket } from '../mockAPI';

export const createTicketSlice = createSlice({
  name: 'createTicket',
  initialState: {
    ticket: [],
    ticketNumber: '',
  },
  extraReducers: {
    [postTicket.fulfilled]: (state, action) => {
      state.ticket = action.payload;
    },
  },
});

export const reducer = combineReducers({
  createTicket: createTicketSlice.reducer,
});
