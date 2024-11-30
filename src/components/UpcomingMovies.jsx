import React from 'react';
import { useGetUpcomingMoviesQuery } from '../service/movieApi';
import Card from '../reuseables/Card';

const UpcomingMovies = () => {

    const data = useGetUpcomingMoviesQuery();
    console.log(data);

  return (
    <Card data={data}/>
  )
}

export default UpcomingMovies;