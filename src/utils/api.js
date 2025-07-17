const  apiReadAccessToken = import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN;


import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmQxMTQyYzdkZmRiYjgyNGUzOTYzODMzMGZjNWQxOCIsIm5iZiI6MTc1Mjc0MjE2OC4yNTgsInN1YiI6IjY4NzhiOTE4OTA5NGVjYTRlNWFmMGQwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M4uRTP3I0o8FMYwe6JBZVe88u-bxo1egwTxef7FCxXE'
    }
};

export {options};