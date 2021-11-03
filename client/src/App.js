import './App.css';

import { useEffect, useState } from 'react';
import {Link, Router} from "@reach/router";

import AddText from "./AddText";
import Text from "./Text";
import ShowTexts from "./ShowTexts.js";


const API_URL = process.env.REACT_APP_API;


function App() {
 
  //Functions as a container to hold & update the data from the server
  const [quotesList, setData] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("Data getting from the server: ", data)
      setData(data);
    }
    getData();
  }, []);


  function getQuote(id){
    let quote = quotesList.find(x => x._id === id);
    return quote;
  }
  
  function addText(text, author){
    const newQuote = { 
      text:text,
      author: author
      }
      fetch(`${API_URL}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newQuote)
      })
      .then(response => response.json())
      .then(data => setData([...quotesList, data]))
      .catch((error) => {
        console.error('Error:', error);
      });
      
  }

  return (
    <>
  
      <h1>Quotr</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>

      <div className="App">
        <Router>
       
        <ShowTexts quotes={quotesList} path="/">
          <AddText addText={addText} path="/" />
        </ShowTexts>
       

        <Text getQuote={getQuote}  path="/quote/:id"/>
        {/* <p>Data from server: {data}</p> */}

        </Router>
    </div>
    </>
  );
}

export default App;
