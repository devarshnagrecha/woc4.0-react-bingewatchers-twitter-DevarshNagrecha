import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import SignUp from './SignUp';
import Login from './Login';



/*const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=37ec74d9934150979c5d99546f2e35ea&page=1";*/

function Navbar() {
    return (
        <div className="navbar">
            <a href="/">Netflix</a>
            <a href="/home">Home</a>
            <div className="dropdown">
                <button className="dropbtn">Movies
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="/trending-movies">Trending</a>
                    <a href="/popular-movies">Popular</a>
                    <a href="/latest-movies">Latest</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">TV series
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="/trending-tv">Trending</a>
                    <a href="/popular-tv">Popular</a>
                    <a href="/latest-tv">Latest</a>
                </div>
            </div>
            <a href="/sign-up">Sign Up</a>
            <a href="/sign-in">Sign In</a>
            <div className="topnav-right">
                <input type="text" placeholder="Search.." />
            </div>
        </div>
    )
}

export default Navbar
