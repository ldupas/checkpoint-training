import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameCard from '../components/game/GameCard';

function GameList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios
        .get('https://apis.wilders.dev/wild-games/games/')
        .then((res) => res.data)
        .then((data) => setGames(data))
    }, [])

    // à partir de là, j'ai un taleau games rempli d'objets ! Pour travailler
    // dessus, je dois passer à nouveau par le setState -> setGames
    const handleDelete = (id) => {
        setGames(games.filter(game => game.id !== id))
    }

    return (
        <div className="GameList">
            {games.map((game) => (
                <div key={game.id}>
                    <GameCard game={game} deleteGame={handleDelete} />
                </div>
            ))}
        </div>
    )
}

export default GameList;
