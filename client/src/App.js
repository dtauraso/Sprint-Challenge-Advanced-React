import React, { useState, useEffect} from 'react';
import axios from "axios"
// just export
import { FetchData } from "./hooks/FetchData";
import './App.css';

function App() {

  // const [data, setData] = useState({})
  // useEffect(() => {

  //     axios
  //     .get("http://localhost:5000/api/players")
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => console.log(err.message))
  // }, [])

  const [serverData, setServerData] = FetchData("http://localhost:5000/api/players")
  console.log("data from api", serverData)


  return (
    <div className="App">

    </div>
  );
}

export default App;
