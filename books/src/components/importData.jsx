import { useState } from "react";
import React from "react";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import "../App.css";

function GetData() {
  const [books, setBooks] = useState(null);
  const [inputValue, setInputValue] = useState(" ");
  const [loading, setLoading] = useState(false);

  const handleInputData = (e) => {
    let myinput = e.target.value.split(" ").join("+");
    setInputValue(myinput);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    fetch(
      `http://openlibrary.org/search.json?q=${inputValue}&page=all&limit=100`
    )
      .then((res) => {
         return res.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
  };

  const handlecorrentPageData = (e) => {
    setLoading(true);
    fetch(
      `http://openlibrary.org/search.json?q=${inputValue}&page=${e.target.value}&limit=100`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  };

  const addBtnForBookList = (num) => {
    if (num > 100) {
      let myFunc = (num) => Number(num);
      const intArr = Array.from(String(num), myFunc);
      const pageCount = intArr[0] + 1;
      const buttonArr = Array.from(Array(pageCount).keys());

      return buttonArr.map((num) => (
        <button key={num+1}
          className="btn-small"
          value={num + 1}
          onClick={handlecorrentPageData}
        >
          {num + 1}{" "}
        </button>
      ));
    }
  };

  const handleSubject = (string) => {
    if (string) {
      return string.slice(0, 5);
    }
    if (string === undefined) {
      return "Missing";
    }
    if (string.length < 5) {
      return string;
    }
  };

  const override = css`
    display: flex;
    margin: 0 auto;
    border-color: red;
  `;

  return (
 
      <div className="main">
        <div className="search-box">
          <input
            type="text"
            className="input-castom"
            onChange={handleInputData}
          />
          <button onClick={handleSubmit} className="btn">
            Fiend Books
          </button>
        </div>
        <div className="loading">
          <HashLoader
            color={"#a196e9"}
            loading={loading}
            css={override}
            size={50}
          />
        </div>
        {books && (
          <div className="fiend">
            <span> {addBtnForBookList(books.numFound)} </span>
            {books.docs.map((value, index) => (
              <ul key={index} className="films-list">
                <li > Title is: {value.title}</li>
                <li> Author Name is: {value.author_name}</li>
                <li> First Publish Year: {value.first_publish_year}</li>
                <li> Subject is : {handleSubject(value.subject)}</li>
              </ul>
            ))}
          </div>
        )}
      </div>
  );
}
export default GetData;
