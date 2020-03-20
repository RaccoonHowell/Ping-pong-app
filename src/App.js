import React from "react";
import Header from "./components/Header";
import Winner from "./components/Winner";
import Reset from "./components/Reset";
import Player1 from "./components/Player/Player1";
import Player2 from "./components/Player/Player2";

const App = () => (
    <>
        <Header />

        <Player1 />

		<Player2 />
        
        <Winner />      

        <hr />

        <Reset />   
    </>
);

export default App;