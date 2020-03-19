import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./data/store";

// event handler functions that are called by the event listeners on the buttons in App.js. Interacting with the store

const handlePlayer1Score = () => {
    store.dispatch({ type: "PLAYER1" })
}

const handlePlayer2Score = () => {
    store.dispatch({ type: "PLAYER2" })
}

const handleReset = () => {
    store.dispatch({ type: "RESET" })
}

// setting up props

const render = () => {
    const state = store.getState();

    ReactDOM.render(
        <App 
            player1Score={ state.player1 } 
            player2Score={ state.player2 } 
            handlePlayer1Score={ handlePlayer1Score }
            handlePlayer2Score={ handlePlayer2Score }
            handleReset={ handleReset}
            player1Serving={ state.player1Serving }
            winner={ state.winner }
        />, 

        document.getElementById('root')
    );
}

// every time state is updated the store will run render

store.subscribe(render);

render();

/*
1. JSX
2. Update state (global for Redux)
3. Pass values into App.js in the render function
4. Accept the props in App.js then use them further down
5. Check the values are getting passed through
6. Get reducer working
*/

/*
Server challenge:
First, add a new property to state - some way to keep track of the server (you could have server with the values 1 or 2 or you could have player1Serving with true and false)
Update your JSX to use the property. So get the classes working for player 1, then update the inital state so it should be player 2 and get it working there too.
Only then should you think about the reducer.
I'd write a separate function that takes a version of the state and updates the server/player1Serving property appropriately. You can test this using console.log() (or TDD if you're feeling adventurous).
Only once you've got that working would I try and get it working in the reducer.
*/

// If the value of player1 gets to 21 then you should show the "Player 1 Wins" message. If the value of player2 gets to 21 then you should show the "Player 2 Wins" message. If no one has won yet, then the "Player x Wins" message should not display at all. The winner logic is business logic, so it should be in the reducer. The wording for the message is view logic so it should go in the component.

// Split up your App.js into sensible sub-components and use props to pass down the relevant values. Remember, if you have two bits of UI that are basically the same they should reuse the same component