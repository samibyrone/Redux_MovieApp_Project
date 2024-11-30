import React from 'react';
import { useGetPopularMoviesQuery } from '../service/movieApi';
import Card from '../reuseables/Card';

const PopularMovies = () => {

    const data = useGetPopularMoviesQuery();
    console.log(data);

    return (
        <Card data={data}/>
    )
}

export default PopularMovies;