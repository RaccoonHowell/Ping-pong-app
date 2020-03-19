import initial from "../initial";
import changeServer from "./changeServer";
import updateP1Score from "./updateP1Score";
import updateP2Score from "./updateP2Score";
import handleWinner from "./handleWinner";

// reducer returns state (updates the state or returns initial). All functions in a reducer must accept and return state

const reducer = (state, action) => {
    switch (action.type) {
        case "PLAYER1": return handleWinner(changeServer(updateP1Score(state)));

        case "PLAYER": return handleWinner(changeServer(updateP2Score(state)));

        case "RESET": return initial;

        default: return state;
    }
};

export default reducer;