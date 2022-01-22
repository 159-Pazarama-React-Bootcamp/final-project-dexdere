// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { RootReducer } from './RootReducer';

// export const Store = createStore(
//   RootReducer,
//   composeWithDevTools(applyMiddleware())
// );

import { configureStore } from '@reduxjs/toolkit';
import createTicketReducer from './ticket/createTicketSlice';

export const store = configureStore({
  reducer: { createTicket: createTicketReducer },
});
