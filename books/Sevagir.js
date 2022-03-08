import { useEffect, useState } from "react";
import '../App.css';






    const [books, setBooks] = useState(null);
    const [inputValue, setInputValue] = useState();
    //const [click, setclick] = useState(1);

 


    useEffect(() => {
        function handleSubmit()  {
            fetch(`http://openlibrary.org/search.json?q=${inputValue}&page=1`)
            .then(res =>  {
                return   res.json()
            })
            .then(data => {
                console.log(data)
            });
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps


    }, []);
   

    const getInputData = (e) => {
        setInputValue(e.target.value.split(" ").join("+"))
    }


console.log()
    return (
        <> 
        <div className="main">
            <div className="fiend">
                <input type="text"  onChange={getInputData}/>
                <button onClick={handleSubmit} className="btn">Fiend Books</button>
            </div>
        </div>
    
        </>
    )
}




/*

            users.map((value, index) => 
                <>
                <div kay = {index}>
                <ul className="films-list">
                    <li> {value.title}</li>
                    <li> {value.release_date}</li>
                    <li> {value.director }</li>
                    <li> {value.description}</li>
                </ul>
                </div>
                </>
            )

*/


export default GetData
