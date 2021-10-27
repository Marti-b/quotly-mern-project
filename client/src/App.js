import { useEffect, useState } from "react";
import {Link, Router, useLocation} from "@reach/router";

import AddText from "./AddText";
import Text from "./Text";
import ShowTexts from "./ShowTexts.js";


const API_URL = process.env.REACT_APP_API;


function App() {
 
  //Functions as a container to hold & update the data from the server
  const [quotesList, setData] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/quotes`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("Data getting from the server: ", data)
      setData(data.quotes);
    }
    getData();
  }, []);

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
