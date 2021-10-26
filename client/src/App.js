import { useEffect, useState } from "react";
import AddText from "./AddText";
import Text from "./Text";
import ShowTextes from "./ShowTextes.js";
const API_URL = process.env.REACT_APP_API;

function App() {

  //Functions as a container to hold & update the data from the server
  const [data, setData] = useState("No data :(");

  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/hello`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setData(data.msg);
    }
    getData();
  }, []);

  return (
    <>
      <h1>MERN App!</h1>
      <AddText />
      <Text />
      <ShowTextes />
      <p>Data from server: {data}</p>
    </>
  );
}

export default App;
