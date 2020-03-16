import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";

const initial = {
    player1: 0,
    player2: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "player1Scored" : return {
            ...state,
            player1 : state.player1 + 1
        }
        case "player2Scored" : return {
            ...state,
            player2 : state.player2 + 1
        }
        case "reset" : return initial;
        
        default: return state;
    }
};

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const handlePlayer1Score = () => {
    store.dispatch({ type: "player1Scored" })
}

const handlePlayer2Score = () => {
    store.dispatch({ type: "player2Scored" })
}

const handleReset = () => {
    store.dispatch({ type: "reset" })
}

const render = () => {
    const state = store.getState();

    ReactDOM.render(
        <App 
            player1Score={ state.player1 } 
            player2Score={ state.player2 } 
            handlePlayer1Score={ handlePlayer1Score }
            handlePlayer2Score={ handlePlayer2Score }
            handleReset={ handleReset}
        />, 

        document.getElementById('root')
    );
}

store.subscribe(render);

render();