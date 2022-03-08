
import React from "react"



    function HandleFilmShoe (value){
        if(value) {
            return (
                <>
                <div   className="img"> {<img src={value.movie_banner} alt="Logo" />}</div>
                    <div className="movie-content"> 
                    <div  className="title">
                        <span className="des">Movie Title: </span>
                        <span className="data">{value.title}</span>
                    </div>
                    <div  className="description">
                        <span className="des">Movie Description: </span>
                        <span className="data">{value.description}</span>
                    </div>
                    <div  className="director">
                        <span className="des"> Movie Director: </span>
                        <span className="data">{value.director}</span>
                    </div>
                    <div   className="producer">
                        <span className="des"> Movie Producer: </span>
                        <span className="data"> {value.producer}</span>
                    </div>
                    <div  className="release-date" >
                        <span className="des">Movie Release Date:</span>
                        <span className="data"> {value.release_date}</span>
                    </div>
                </div>
                </>
            )
        }
    }



export default HandleFilmShoe