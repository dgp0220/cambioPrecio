import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducers from './authReducers';

export default function createReducer(history) {
    const reducers = {
        router: connectRouter(history),
        auth: authReducers
    }
    return combineReducers(reducers);
}