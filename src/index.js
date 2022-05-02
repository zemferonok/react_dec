import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import

import { App } from './App';
import {store} from "./redux/store";    // Import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>    {/* React wrapped store */}
        <App/>
    </Provider>
)