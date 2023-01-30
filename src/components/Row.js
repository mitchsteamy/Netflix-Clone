import React, { useEffect, useState } from 'react';
import axios from '../axios'

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([])

    const baseUrl = 'https://image.tmdb.org/t/p/original/'

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }

        fetchData();
    }, [fetchUrl])

    console.log(movies)

    return (
        <div className='ml-5 text-xl font-bold'>
            <h2>{title}</h2>

            <div className='flex overflow-y-hidden overflow-x-scroll scrollbar-hide p-5 space-x-3 object-contain '>
                {movies.map((movie) => (
                    ((isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path)) && (
                        <img
                            className={`max-h-24 hover:scale-105 hover:opacity-100 ${isLargeRow && 'max-h-60 hover:scale-110 hover:opacity-100'}`}
                            key={movie.id}
                            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name} />
                    )
                ))}
            </div>
        </div>
    )
}

export default Row