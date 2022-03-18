import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const GameDetails = () => {
    const { id } = useParams()
    const [info, setInfo] = useState({})

    useEffect(() => {
        axios
            .get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then((response) => setInfo(response.data))
            .catch("error")
    }, [])

    return (
        <div>
            <h1>{info.name}</h1>
            <img src={info.background_image} height="120px" alt={info.name}></img>
            <p>{info.released}</p>
            {info.clip !== undefined && <video controls><source src={info.clip.clip} /></video>}


        </div>
    );
};

export default GameDetails;