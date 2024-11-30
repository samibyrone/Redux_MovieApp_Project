import React from 'react';
import { MOVIE_IMAGE_URL } from '../service/movieApi';
import style from "../styles/Card.module.css"

const Card = (props) => {

    const {data, isLoading, isError} = props;

    return (
        <div className={style.image}>
            {data?.data?.results.map((movie) => (
              <div key={movie.id}>
                <img 
                  src={`${MOVIE_IMAGE_URL}${movie.poster_path}`}
                  alt={`${movie.title}`}
                />
                <div className={style.overview}>{movie.overview}</div>
              </div>
            ))}
        </div>
    ); 
}  

export default Card