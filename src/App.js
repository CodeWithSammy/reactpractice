import React from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
// api key =c7b4a077
const API_URL = 'https://www.omdbapi.com?apikey=c7b4a077';

const movie1={
    "Title": "Spiderman",
    "Year": "1990",
    "imdbID": "tt0100669",
    "Type": "movie",
    "Poster": "N/A"
}
const App = ()=>{

    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search );
        
    }
    useEffect(()=>{
        searchMovies('Spiderman');
    },[]);

    return(
       <div className="app">
        <h1> Movie World</h1>

        <div className="search">
            <input
                placeholder="Search for movies"
                value='Superman'
                onChange={()=>{}}
            />
            <img
                src={SearchIcon}
                alt="search "
                onClick={()=>{}}
            />
        </div>
        <div className="container">
            <div className="movie">
                <div>
                    <p>{movie1.Year}</p>
                </div>

                <div>
                    <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'http://via.placeholder.com/400'} alt={movie1.Title}/>
                </div>
                <div>
                    <span>{movie1.Type}</span>
                    <h3>{movie1.Title}</h3>
                </div>
            </div>
        </div>
       </div>
    )

}
export  default App;