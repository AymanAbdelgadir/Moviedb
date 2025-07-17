import React, {useEffect, useState} from 'react';
import {options} from '../utils/api.js';
import axios from 'axios';

const HomePage = () => {
   const addData =  (res) => {
       setMovies(res.data.results)
   }


    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios(options)
            .then(res => addData(res))
            .catch(err => console.log(err))
            .finally(() => console.log('done'))
    },[])
    return (

        <section>

        </section>
    );
};

export default HomePage;