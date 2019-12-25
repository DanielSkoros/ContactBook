import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import promiseMiddleware from 'redux-promise';
import reduxThunk from 'redux-thunk';

import Reducer from './reducers';


const storeWithMiddleware = applyMiddleware(promiseMiddleware, reduxThunk)(createStore);
export const store = storeWithMiddleware(
    Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
        <Provider store={store}>
            <Routes />
        </Provider>,
    document.getElementById('root'));
