import React from 'react'
import MovieBundle from '../MovieBundle/MovieBundle'
import './MoviesList.css'

var MoviesList = (props) => {
    return (
        <div className="movies-list">
            {props.movies.map((movie) => {
                return <MovieBundle movieID={movie.movieID}
                                    title={movie.title}
                                    category={movie.category}
                                    director={movie.director}
                                    year={movie.year}
                                    thumbnail={movie.thumbnail}/>
            })}
        </div>
    )
}


export default  MoviesList;
