import React,{useEffect, useState} from 'react';
import './RowPost.css';
import {IMG_URL} from '../../constants/constants';
import axios from '../../tmdbAxios';

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(props.url)
        .then((response)=>{
            console.log(response.data);
            setMovies(response.data.results);
        })
    }, [])
    
    return (
        <div className='row'>
            <h2 style={{paddingTop: '20px'}}>{props.title}</h2>
            <div className='posters'>
            {
                movies.map((obj)=>{
                    return(
                        <img className={props.isSmall ? "smallPoster" : "poster"} alt='poster' src={`${IMG_URL+obj.backdrop_path}`} />
                    )
                })
            }
            </div>
        </div>
    )
}

export default RowPost
