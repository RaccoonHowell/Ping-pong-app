import { connect } from "react-redux";
import Player from "./Player";

const mapStateToProps = state => {
    return {
        title: "Player 1",
        score: state.player1,
        serving: state.player1Serving,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleScore: () => {dispatch({type: "PLAYER1"})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);