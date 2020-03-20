import { connect } from "react-redux";
import Player from "./Player";

const mapStateToProps = state => {
    return {
        title: "Player 2",
        score: state.player2,
        serving: !state.player1Serving,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleScore: () => {dispatch({type: "PLAYER2"})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);