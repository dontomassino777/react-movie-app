import React from 'react';
import { useEffect } from 'react';
// 73346e0c
const API_URL = 'http://www.omdbapi.com?apikey=73346e0c'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman')
    }, []);

    return (
        <h1>App</h1>
    );
}

export default App;