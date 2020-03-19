import React from "react";
import Header from "./components/Header";
import Winner from "./components/Winner";
import Reset from "./components/Reset";
import Scores from "./components/Scores";

const App = ({ player1Score, player2Score, handlePlayer1Score, handlePlayer2Score, handleReset , player1Serving, winner }) => (
    <>
        <Header />

        <Scores 
        	player1Serving={ player1Serving }
            player1Score={ player1Score }
            player2Score={ player2Score }
            handlePlayer1Score={ handlePlayer1Score }
            handlePlayer2Score={ handlePlayer2Score }
		/>
        
        <Winner winner={ winner } />      

        <hr />

        <Reset handleReset={ handleReset } />   
    </>
);

export default App;