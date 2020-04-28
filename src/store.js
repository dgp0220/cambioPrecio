import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createReducers from './reducers';
import reduxThunk from 'redux-thunk';

const history = createBrowserHistory();
const middlewares = [
    reduxThunk,
    routerMiddleware(history),//dispatch history actions
].filter(Boolean);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configStore(initialState) {
    const store = createStore(
        createReducers(history),
        initialState,
        composeEnhancers(applyMiddleware(...middlewares)),
    )

    return store;
}

export function getHistory() {
    return history;
}