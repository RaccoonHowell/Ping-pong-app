// function to update player2 score

const updateP2Score = state => ({ 
    ...state, 
    player2: state.player2 + 1 
})

export default updateP2Score;