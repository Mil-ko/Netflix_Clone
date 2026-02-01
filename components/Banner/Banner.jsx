import React, {useState, useEffect} from "react";
import "./banner.css";
import axios from "../../src/utils/axios"
import requests from "../../src/utils/request";


function Banner (){
    
     const [movie, setMovie] = useState([]);
     useEffect(()=>{
       const fetchData = async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals)
                console.log("request", request);
                setMovie(request.data.results[
                    Math.floor(Math.random()*request.data.results.length)
                 ])
            } catch (error) {
                console.log("error", error)
                
            }
        }
        fetchData();
     }, [])

     function truncate(str, n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
     }  
  return (
    <>
 <div className="banner" style={{
     backgroundSize:`cover`,
     backgroundImage : `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
     backgroundPosition:" center",
     backgroundRepeat:"no-repeat"
 }}>
  <div className="banner_contents">
    <h1 className="banner_title">
         {movie?.original_title || movie?.name || movie?.original_name}
         
    </h1>
    <div className="banner_buttons">
        <button className="banner_buttons play">play</button>
        <button className="banner_buttons my_list">My list</button>
    </div>
    <h1 className="banner_description">{truncate(movie?.overview,150)}</h1>
  </div>

 </div>
    </>
  );
};

export default Banner;