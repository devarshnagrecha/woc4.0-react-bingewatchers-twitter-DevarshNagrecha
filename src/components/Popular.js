import React, { useEffect, useState } from "react";
import MovieItem from './MovieItem';

const API_KEY = 'api_key=37ec74d9934150979c5d99546f2e35ea';
const BASE_URL = 'https://api.themoviedb.org/3';

function Popular(props) {

    const [movies, setMovies] = useState([]);
    const API_URL = `https://api.themoviedb.org/3/${props.category}/popular?api_key=37ec74d9934150979c5d99546f2e35ea&language=en-US&page=1`;

    useEffect(() => {

        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            });

    }, []);

    return (
        <>
            <div>
                <h1 style={{margin: '30px 60px 40px 100px'}}>Popular {props.category=='tv'?"TV series":"Movies"}</h1>
            </div>
            <div className="outmost">
                <div className="movie-container">
                    {movies.length > 0 && movies.map(movie => (<MovieItem key={movie.id} {...movie} />))}
                </div>
            </div>
        </>
    )
}

export default Popular
