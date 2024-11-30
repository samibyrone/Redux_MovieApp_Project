import React from 'react';
import { useGetTopRatedMoviesQuery } from '../service/movieApi';
import Card from '../reuseables/Card';

const TopRated = () => {

    const data = useGetTopRatedMoviesQuery();
    console.log(data);

  return (
    <Card data={data}/>
  )
}

export default TopRated;