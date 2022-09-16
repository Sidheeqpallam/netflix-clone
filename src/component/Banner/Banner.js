import React, { useEffect, useState } from 'react';
import './Banner.css'
import axios from '../../axios';
import {API_KEY, IMAGE_URL} from '../../constants/constants'


function Banner() {
  const [movie, setMovie] = useState();
  let x = Math.floor((Math.random() * 19) + 0);

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data.results)
     
      setMovie(response.data.results[x])
    })
    
  }, [])
  return (
    <div style={{    backgroundImage:`url(${movie ? IMAGE_URL+movie.backdrop_path : ''})`}}
     className='banner'>
        <div className="content">
            <h1 className="title">
                {movie ? movie.title : ''}
            </h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">{movie ? movie.overview : ''}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner