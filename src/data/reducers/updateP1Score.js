// function to update player1 score

const updateP1Score = state => ({ 
    ...state, 
    player1: state.player1 + 1 
})

export default updateP1Score;