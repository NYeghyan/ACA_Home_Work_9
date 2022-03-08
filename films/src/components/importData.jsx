import { useEffect, useState } from "react";
import "../App.css";

function Data() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => setFilms(films));
  }, []);

  console.log(films);
  return (
      <>
        {films &&
          films.map((film) => {
            return (
                <div key={film.id} className="list-data">
                  <h4> Title: {film.title}</h4>
                  <h4> Release Data: {film.release_date}</h4>
                  <h4> Director: {film.director}</h4>
                  <h4> Description:  {film.description}</h4>
                </div>
            );
          })}
       </>
  );
}

export default Data;
