import React from 'react';

const Winner = ({ winner }) => (
    
        winner > 0 ? (
            <h2 className="alert alert-success">Player { winner } wins!</h2>) : null
            // {/* if winner is greater than 0 show the alert and winning player (1 or 2), otherwise show null */ }
);

export default Winner;