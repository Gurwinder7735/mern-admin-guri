import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://mern-admin-test.herokuapp.com/';

export const URL = 'http://localhost:5000/Uploads/'
// export const URL = 'https://mern-admin-test.herokuapp.com/Uploads/'

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();