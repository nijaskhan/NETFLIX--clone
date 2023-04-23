import React,{useEffect, useState} from 'react';
import './RowPost.css';
import {IMG_URL, API_KEY} from '../../constants/constants';
import axios from '../../tmdbAxios';
import YouTube from 'react-youtube';

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [movieId, setMovieId] = useState();

    useEffect(() => {
        axios.get(props.url)
        .then((response)=>{
            setMovies(response.data.results);
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
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((response)=>{
            console.log(response.data.results);
            setMovieId(response.data.results[0]);
        })
    }
    
    return (
        <div className='row'>
            <h2 style={{paddingTop: '20px'}}>{props.title}</h2>
            <div className='posters'>
            {
                movies.map((obj)=>{
                    return(
                        <img onClick={()=>handletrailer(obj.id)} className={props.isSmall ? "smallPoster" : "poster"} alt='poster' src={`${IMG_URL+obj.backdrop_path}`} />
                    )
                })
            }
            </div>
            { movieId && <YouTube videoId={movieId.key} opts={opts} /> }
        </div>
    )
}

export default RowPost
