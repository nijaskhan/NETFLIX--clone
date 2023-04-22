import React, { useEffect, useState } from 'react';
import './banner.css';
import { API_KEY, IMG_URL } from '../../constants/constants';
import axios from '../../tmdbAxios';

function Banner() {
    const [movies, setMovie] = useState();
    const [selector, setSelector] = useState(0);

    useEffect(() => {
      axios.get(`trending/all/day?api_key=${API_KEY}`)
      .then((response)=>{
        setMovie(response.data.results);
        const MovieCount = response.data.results.length;
        setSelector(Math.floor(Math.random() * parseInt(MovieCount)) + 1);
      })
    }, [])
    
    return (
        <div className='banner' style={{backgroundImage: `url(${movies ? IMG_URL+movies[selector].backdrop_path: ""})`}}>
            <div className='content'>
                <h1 className='title'>{movies ? movies[selector].title : ""}</h1>
                <div className='banner_buttons' style={{paddingBottom: '10px',paddingTop: '6px'}}>
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movies ? movies[selector].overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
