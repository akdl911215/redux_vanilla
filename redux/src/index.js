import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'counter/reducer/Counter.reducer';
import counterSlice from 'counter/reducer/counter.slice';
import todos from 'todos/reducer/todo.reducer';

const rootReducer = combineReducers({ counterSlice, counterReducer, todos });
// const store = createStore(rootReducer); 바닐라 리덕스
const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
