import React from 'react';
import { NavLink } from 'react-router-dom';


const Game = (props) => {
    return (
        <div>
            <h1>{props.titre.name}</h1>
            <img src={props.titre.background_image} height="120px" alt={props.titre.name}></img>
            <p>{props.titre.released}</p>
            <NavLink to={`/games/${props.titre.id}`}><button>Détails du jeu</button></NavLink>

        </div>
    );
};

export default Game;