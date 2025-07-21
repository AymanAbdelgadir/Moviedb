import React, {useEffect, useState} from 'react';
import {options} from '../utils/api.js';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import MovieCard from '../components/MovieCard.jsx';


const HomePage = () => {
   const addData =  (res) => {
       setMovies(res.data.results)

       }

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios(options)
            .then(res => addData(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    },[])
    useEffect(() => {
        console.log(movies)
    },[])
    return (

        <section>
            {loading ?( <LoadingSpinner/> ):
                <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} {...movie}/>
                    ))}
                </div>
            }
        </section>
    );
};

export default HomePage;