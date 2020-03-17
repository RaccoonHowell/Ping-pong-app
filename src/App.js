import React from "react";

const App = ({ player1Score, player2Score, handlePlayer1Score, handlePlayer2Score, handleReset , player1Serving }) => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row mb-4">
            <div className="col-md-6 mt-4">
                <div className={ "card text-center" + (player1Serving ? " bg-dark text-white" : "") }>
                    <h5 className="card-header">Player 1</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ player1Score }</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={ handlePlayer1Score } className="form-control btn btn-success">+</button>
                    </div>
                </div>
            </div>

            <div className="col-md-6 mt-4">
                <div className={ "card text-center" + (!player1Serving ? " bg-dark text-white" : "") }>
                    <h5 className="card-header">Player 2</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ player2Score }</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={ handlePlayer2Score } className="form-control btn btn-success">+</button>
                    </div>
                </div>
            </div>
        </div>

        { /* winner message */}
        <h2 className="alert alert-success">Player {/* winning player here */} wins!</h2>

        <hr />

        { /* reset button */}
        <button onClick={ handleReset } className="btn btn-danger">Reset</button>
    </React.Fragment>
);

export default App;