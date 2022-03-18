import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Game from './Game';

const GameList = () => {
    const [game, setGame] = useState([])
    const [on, setOn] = useState(false)


    useEffect(() => {
        axios
            .get("https://apis.wilders.dev/wild-games/games/")
            .then((response) => setGame(response.data))
            .catch("error")
    }, [])

    const filter = () => {
        setOn(!on)
    }

    return (
        <div>
            <button onClick={filter}>{!on ? "Affiche le notes supérieurs 4.5" : "Affiche tous les jeux"}</button>
            {game.filter(rate => rate.rating >= 4.5 || !on)
                .map((titre, index) => {
                    return <Game titre={titre} index={index} />
                })}

        </div>
    );
};

export default GameList;