import React, { useEffect, useState } from 'react'
import axios from '../axios'
import requests from '../Requests';


function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, [])

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <header
      className='relative object-contain h-[448px]'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center top',
      }}>

      <div className='ml-7 pt-36 h-48 z-20'>
        <h1 className='text-4xl font-extrabold pb-1.5'>
          {movie?.title || movie?.name || movie?.orgional_name} 
        </h1>
        <div className='mt-2'>
          <button className='cursor-pointer bg-neutral-700/50 font-bold rounded-sm px-8 py-2 mr-4 hover:bg-[#e6e6e6] hover:text-[#111] transition-all'>Play</button>
          <button className='cursor-pointer bg-neutral-700/50 font-bold rounded-sm px-8 py-2 mr-4 hover:bg-[#e6e6e6] hover:text-[#111] transition-all' >My List</button>
        </div>
        <h1 className='leading-snug pt-4 text-lg max-w-[550px] h-20'>
          {truncate(movie?.overview, 200)}
        </h1>
      </div>

      <div
        className='relative mt-36 h-28 bg-gradient-180 from-transparent to-[#111]'
      />
      
    </header>
  )
}

export default Banner;