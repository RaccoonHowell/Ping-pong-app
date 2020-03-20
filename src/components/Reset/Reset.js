import React from "react";

const Reset = ({ handleReset }) => {
    return (
        <button onClick={ handleReset } className="btn btn-danger">Reset</button>
    )
}

export default Reset;