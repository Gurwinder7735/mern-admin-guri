import { combineReducers } from 'redux';
import { authReducer } from './auth/reducer';

import Layout from './layout/reducer';
import { alertsReducer } from './alerts/reducer';

const rootReducer = combineReducers({
    // public
    Layout,
    auth: authReducer,
    alert: alertsReducer

});

export default rootReducer;