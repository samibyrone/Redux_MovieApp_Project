import React from 'react';
import { useGetNowPlayingMoviesQuery } from '../service/movieApi';
import Card from '../reuseables/Card';

const NowPlaying = () => {

  const data = useGetNowPlayingMoviesQuery();
  console.log(data);

  return (
    <div>
      <Card data={data}/>
    </div>
  );
};

export default NowPlaying;