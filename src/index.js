import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";

import App from './App';

import createStore from './store'
const store = createStore()


setTimeout(function (){
    store.dispatch({
        type: 'SET_BOOK',
        payload: [{
            id: 1,
            title: 'Hello Oruel'
        }]
    })
}, 1000)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
