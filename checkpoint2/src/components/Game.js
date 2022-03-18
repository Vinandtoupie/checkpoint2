import React from 'react';


const Game = (props) => {
    return (
        <div>
            <h1>{props.titre.name}</h1>
            <img src={props.titre.background_image} height="120px" alt={props.titre.name}></img>
            <p>{props.titre.released}</p>
        </div>
    );
};

export default Game;