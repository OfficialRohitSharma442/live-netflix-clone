import React, { useEffect, useState } from "react";
import axios from "./axios";
/* import requests from "./requests"; */
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original";
function Row({ title, fetchUrl, isLargerow }) {
  const [movies, setMovies] = useState([]);
  const[trailerUrl, setTrailerUrl] =useState("");
  // a snippet of code which runs besed on specific condition
  useEffect(() => {
    // run one when the row loads ,and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height:"390",
    width:"100%",
    palyerVars:{
      autoplay:1,
    },
  };
    const handleClick = (movie)=> {
    if (trailerUrl){
      setTrailerUrl("");
    }else{
      movieTrailer(movie?.name || " ")
      .then((url)=>{
       /*  https://www.youtube.com/watch?v=2lfETGiIDf8 */
       const urlParams = new URLSearchParams(new URL(url).search);
       setTrailerUrl(urlParams.get("v"));

      }).catch((error)=>console.log(error));
    }

  };
//   console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {/* row___Posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargerow && "row__posterLarge"}`}
            src={`${base_url}${
                isLargerow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
     {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
export default Row;
