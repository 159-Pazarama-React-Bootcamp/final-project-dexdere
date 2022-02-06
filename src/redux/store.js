import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './slices/createTicketSlice';

export const store = configureStore({ reducer });
