import {React, createElement}  from 'react';
import { useState } from "react";
import select from "./elemets"




function GetData () {
    const [inputValue, setInputValue] = useState('');
    const [url , setUrl] = useState('');

    function handleSubmit(e) {
            fetch( `https://dog.ceo/api/breed/${inputValue}/images/random`).then(res => res.json())
            .then(url => setUrl(url));
    }
    
    const getInputData = (e) => {
        setInputValue(e.target.value)

    }

    
  function GetImg() {
    if (url.message !== undefined) {
        return  createElement('img', {src: `${url.message}`})
    }
  }



    return (
        <div className="main">
            <div className="fiend">
                <select name="" id="" onChange={getInputData}>
                    <> 
                    {select}
                    </>
                </select>
                <button onClick={handleSubmit} className="btn">Fiend dog</button>
            </div>

            <div className="dog-pic">
                {GetImg()}
               
            </div>           
        </div>
    )
}





export default GetData
