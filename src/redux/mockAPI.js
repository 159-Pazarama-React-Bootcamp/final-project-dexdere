/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTicket = createAsyncThunk('ticket/getTicket', async () => {
  axios.get(process.env.REACT_APP_API_URL).then((response) => response.data);
});

export const postTicket = createAsyncThunk(
  'ticket/postTicket',
  async (data) => {
    axios
      .post(process.env.REACT_APP_API_URL, {
        name: data.name,
        surname: data.surname,
        age: data.age,
        tcNo: data.tcNo,
        address: data.address,
        details: data.details,
        file1: data.file,
        ticketNumber: data.ticketNumber,
      })
      .then((response) => response.data);
  }
);
