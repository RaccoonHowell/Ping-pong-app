import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";

const initial = {
    player1: 0,
    player2: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT": return { ...state, value: state.value + 1 }; default: return state;
    } 
};

const store = createStore(reducer, initial);

store.subscribe(() => {
    let state = store.getState();

    console.log(state.count); 
});

store.dispatch({ type: "INCREMENT" });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();