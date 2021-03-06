import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
        file: data.file,
        date: data.date,
        ticketNumber: data.ticketNumber,
      })
      .then((response) => response.data);
  }
);
