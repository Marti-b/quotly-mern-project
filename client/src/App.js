import { useEffect, useState } from "react";
import {Router} from "@reach/router";

import AddText from "./AddText";
import Text from "./Text";
import ShowTextes from "./ShowTextes.js";

const API_URL = process.env.REACT_APP_API;


function App() {

  //Functions as a container to hold & update the data from the server
  //const [data, setData] = useState("No data :(");

  const [quotesList, setList] = useState([
    { 
      "id": 1,"text": "This is the test quote and the first in the line","source": "quote.com"
    },
    { 
      "id": 2,"text": "Test2","source": "quote.com"
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

  // useEffect(() => {
  //   setData([listOfQuotes])
  // })
  
  return (
    <>
      
      <Router>
      <h1>MERN App!</h1>

      <AddText path="/" />
      <Text path="/quote/:id"/>
      <ShowTextes quotes = {quotesList} path="/"/>
      
      {/* <p>Data from server: {data}</p> */}
      </Router>
      


     
    </>
  );
}

export default App;
