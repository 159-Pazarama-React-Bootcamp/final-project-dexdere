/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const createTicketSlice = createSlice({
  name: 'createTicket',
  initialState: {
    name: '',
    surname: '',
    age: '',
    tcNo: '',
    address: '',
    details: '',
    file1: '',
    ticketNumber: '',
  },
  reducers: {
    changeTicketState: (state, action) => {
      state.name = JSON.stringify(action.payload.name);
      state.surname = JSON.stringify(action.payload.surname);
      state.age = JSON.stringify(action.payload.age);
      state.tcNo = JSON.stringify(action.payload.tcNo);
      state.address = JSON.stringify(action.payload.address);
      state.details = JSON.stringify(action.payload.details);
      state.file1 = action.payload.file1;
      state.ticketNumber = JSON.stringify(action.payload.ticketNumber);
    },
  },
});

export const { changeTicketState } = createTicketSlice.actions;
export default createTicketSlice.reducer;
