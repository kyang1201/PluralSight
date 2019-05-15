import React from 'react';
import { Provider } from 'react-redux'
import { store } from '../store'
import { ConnectDashboard } from './dashboard';

export const Main = () => (
    <Provider store={ store }>
        <div>
            <ConnectDashboard />
        </div>
    </Provider>
)