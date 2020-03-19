const handleWinner = state => {
    const winner = state.player1 === 21 || state.player2 === 21;

    const higherScore = state.player1 > state.player2 ? 1 : 2;

    const newWinner = winner ? higherScore : 0;

    return {
        ...state,
        winner: newWinner,
    }
}

export default handleWinner;

// a function that accesses the state to decide the winner
// variable notes who the winner is when player1 or player2's state reaches 21
// variable that determines the higher scoring player
// variable that holds a ternary that checks the winner, if there is none it is set to 0 (no player)
// copy of the state
// return 0 if there is no current winner, 1 if it is player1 or 2 if it is player2