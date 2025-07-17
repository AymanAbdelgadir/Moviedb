import React, {useEffect, useState} from 'react';
import {options} from '../utils/api.js';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner.jsx';

const HomePage = () => {
   const addData =  (res) => {
       setMovies(res.data.results)
   }

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios(options)
            .then(res => addData(res))
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    },[])
    return (

        <section>
            {loading ? <LoadingSpinner/> :<div>Done</div>
            }
        </section>
    );
};

export default HomePage;