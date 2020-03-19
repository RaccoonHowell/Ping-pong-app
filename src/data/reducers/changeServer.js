// function to determine whether player1Serving needs to be updated and updates as necessary

const changeServer = state => {
    const total = state.player1 + state.player2;

    const needToSwitch = total % 5 === 0;

    if (!needToSwitch) {
        return state;
    }

    return {
        ...state,
        player1Serving: state.player1Serving ? false : true,
    };
}

export default changeServer;