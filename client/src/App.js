import { useEffect, useState } from "react";
import {Link, Router} from "@reach/router";

import AddText from "./AddText";
import Text from "./Text";
import ShowTextes from "./ShowTextes.js";

const API_URL = process.env.REACT_APP_API;


function App() {

  //Functions as a container to hold & update the data from the server
  //const [data, setData] = useState("No data :(");

  const [quotesList, setData] = useState([
    {
      id: 1, text: "This is the test quote and the first in the line", source: "quote.com"
    },
    {
      id: 2, text: "Test2", source: "quote.com"
    }
  ])


  // useEffect(() => {
  //   async function getData() {
  //     const url = `${API_URL}/`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log("Data getting from the server: ", data)
  //     setData(data.quotes);
  //   }
  //   getData();
  // }, []);

  //   useEffect(() => {
  //     const url = `${API_URL}/`;
  //     fetch(url)
  //     .then(response => response.json())
  //     .then((data) =>{
  //       console.log("Data getting from the server: ", data)
  //       setData(data.quotes)
  //     });
  // }, []);

  function getQuote(id){
    let quote = quotesList.find(x => x.id.toString() === id);
    return quote;
  }
  function addText(text, source){
    const newQuote = {
      id: quotesList.length + 1, 
      text:text,
      source: source
      };
      setData([...quotesList, newQuote]);
  }

  return (
    <>
  
      <h1>MERN App!</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>

      <div className="App">
        <Router>

        <ShowTextes quotes = {quotesList} path="/">
       
        </ShowTextes>

        <AddText addText={addText} path="/add" />

        <Text getQuote={getQuote}  path="/quote/:id"/>
        {/* <p>Data from server: {data}</p> */}

        </Router>
    </div>



    </>
  );
}

export default App;
