import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function GameDetails(props) {
    const [trailer, setTrailer] = useState();
    const gameId = props.match.params.id

    useEffect(() => {
        axios
        .get(`https://apis.wilders.dev/wild-games/games/${gameId}`)
        .then((res) => {
            setTrailer(res.data.clip.clip)
        })
    }, [gameId])

    return (
        <div className='GameDetails'>
            <span>Trailer :</span>
            <video controls src={trailer} />
            <Link to={{pathname: '/'}}>Go back to homepage</Link>
        </div>
    )
}

export default GameDetails;
