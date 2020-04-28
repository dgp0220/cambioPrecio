import React from 'react';
import RoutesComponent from './components/routes/RoutesComponent';
import './App.css';

//redux
import { ConnectedRouter } from 'connected-react-router';
import configStore, { getHistory } from './store';
import { Provider } from 'react-redux';

export default function App() {
    const store = configStore();
    return (
        <Provider store={store}>
            <ConnectedRouter history={getHistory()}>
                <RoutesComponent />
            </ConnectedRouter>

        </Provider>
    )
}