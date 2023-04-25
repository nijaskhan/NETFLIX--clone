import React, { useEffect, useState } from 'react';
import './banner.css';
import { API_KEY, IMG_URL } from '../../constants/constants';
import axios from '../../tmdbAxios';
import YouTube from 'react-youtube';

function Banner() {
    const [movies, setMovie] = useState();
    const [selector, setSelector] = useState(0);
    const [movieId, setMovieId] = useState();

    useEffect(() => {
      axios.get(`trending/all/day?api_key=${API_KEY}`)
      .then((response)=>{
        setMovie(response.data.results);
        const MovieCount = response.data.results.length;
        setSelector(Math.floor(Math.random() * parseInt(MovieCount)) + 1);
      })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        }
    }
    const handletrailer=(id)=>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((response)=>{
            setMovieId(response.data.results[0]);
        })
    }
    
    return (
        <div>
            <div className='banner' style={{backgroundImage: `url(${movies ? IMG_URL+movies[selector].backdrop_path: ""})`}}>
                <div className='content'>
                    <h1 className='title'>{movies ? movies[selector].title : ""}</h1>
                    <div className='banner_buttons' style={{paddingBottom: '10px',paddingTop: '6px'}}>
                        <button className='button' onClick={()=>handletrailer(movies[selector].id)}>Play</button>
                        <button className='button'>My list</button>
                    </div>
                    <h1 className='description'>{movies ? movies[selector].overview : ""}</h1>
                </div>
                <div className="fade_bottom"></div>
            </div>
            <div className='banner1' style={{backgroundImage: `url(${movies ? IMG_URL+movies[selector].poster_path: ""})`}}>
                <div className='content'>
                    <h1 className='title'>{movies ? movies[selector].title : ""}</h1>
                    <div className='banner_buttons' style={{paddingBottom: '10px',paddingTop: '6px'}}>
                        <button className='button' onClick={()=>handletrailer(movies[selector].id)}>Play</button>
                        <button className='button'>My list</button>
                    </div>
                    <h1 className='description'>{movies ? movies[selector].overview : ""}</h1>
                </div>
                <div className="fade_bottom"></div>
            </div>
            { movieId && <YouTube videoId={movieId.key} opts={opts} /> }
        </div>
    )
}

export default Banner
