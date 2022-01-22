import { combineReducers } from 'redux';
import { CreateTicketReducer } from './reducers/CreateTicketReducer';

const reducers = { CreateTicketReducer };

export const RootReducer = combineReducers(reducers);
