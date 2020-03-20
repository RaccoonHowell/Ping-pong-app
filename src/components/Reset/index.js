import { connect } from "react-redux";
import Reset from "./Reset";

const mapDispatchToProps = dispatch => {
    return {
        handleReset: () => {dispatch({type: "RESET"})}
    }
}

export default connect(null, mapDispatchToProps)(Reset);