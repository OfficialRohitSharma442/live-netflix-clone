import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';
const base_url = "https://image.tmdb.org/t/p/original";
function Banner(){
const [movie,setMovie] = useState([]);
useEffect(()=>{
    async function fetchData(){
       const request = await axios.get(requests.fetchNetflixOriginals);
       setMovie(
        request.data.results[ Math.floor(Math.random() * request.data.results.length - 1)]
       );
       console.log(request.data.results[ Math.floor(Math.random() * request.data.results.length - 1)]);
    }
    fetchData();
},[]);
function truncate(str , n){
    return str?.length > n ? str.substr(0, n - 1) +"..." : str ;
}


    return (
           <header className="Banner" 
           style={{
               backgroundSize:'cover',
               backgroundImage:`url(${base_url}${movie?.backdrop_path})`,
               backgroundPosition:"center top"
           }}
           >
               <div className="Banner__contents">
                <h1 className="Banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
            
               <div className="bannner__Buttons">
                 <button className="bannner__Button">Play</button>                 
                 <button className="bannner__Button">My List</button> 
               </div>
               <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1> 
               </div>   
            
           </header>
        )
}



export default Banner;