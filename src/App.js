import './App.css';
import MovieItem from './components/MovieItem';
import React, { useEffect, useState } from "react";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Trending from './components/Trending';
import Popular from './components/Popular';
import Latest from './components/Latest';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/sign-up" element={<SignUp />}> </Route>
          <Route exact path="/sign-in" element={<Login />}> </Route>
          <Route exact path="/trending-movies" element={<Trending category="movie" />}> </Route>
          <Route exact path="/trending-tv" element={<Trending category="tv" />}> </Route>
          <Route exact path="/popular-movies" element={<Popular category="movie" />}> </Route>
          <Route exact path="/popular-tv" element={<Popular category="tv" />}> </Route>
          <Route exact path="/latest-movies" element={<Latest category="movie" />}> </Route>
          <Route exact path="/latest-tv" element={<Latest category="tv" />}> </Route>
        </Routes>
      </Router>

    </>


  );
}

export default App;
