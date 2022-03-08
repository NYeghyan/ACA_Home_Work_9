import { useEffect, useState } from "react";
import HandleFilmShoe from "./elements"
import '../App.css';

function GetData () {
    const [users, setUsers] = useState();

    useEffect (() => {
        fetch("https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe")
        .then(res =>  {
            return   res.json()
        })
        .then(data => {
            setUsers(data)
 
        });
    },[])


    return ( 
            <div className="main"> {HandleFilmShoe(users)} </div> 
    )
}


export default GetData
