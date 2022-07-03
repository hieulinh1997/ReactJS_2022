import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import authReducer from '../features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';
import { history } from '../utils';
export const rootReducer = combineReducers({
    /*router: connectRouter(history),*/
    counter: counterReducer,
    auth: authReducer
})