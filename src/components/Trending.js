import React, { useEffect, useState } from "react";
import MovieItem from './MovieItem';

const API_KEY = 'api_key=37ec74d9934150979c5d99546f2e35ea';
const BASE_URL = 'https://api.themoviedb.org/3';

function Trending(props) {

    const [movies, setMovies] = useState([]);
    const API_URL_TRENDING = `${BASE_URL}/trending/${props.category}/day?${API_KEY}`;
    const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=37ec74d9934150979c5d99546f2e35ea&page=1";

    useEffect(() => {

        fetch(API_URL_TRENDING)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            });

    }, []);

    return (
        <>
            <div>
                <h1 style={{margin: '30px 60px 40px 100px'}}>Trending {props.category=='tv'?"TV series":"Movies"}</h1>
            </div>
            <div className="outmost">
                <div className="movie-container">
                    {movies.length > 0 && movies.map(movie => (<MovieItem key={movie.id} {...movie} />))}
                </div>
            </div>
        </>
    )
}

export default Trending
