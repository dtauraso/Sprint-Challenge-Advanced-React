import React, { useState, useEffect} from 'react';
import axios from "axios"
// just export
// import { useSearchForm } from "./hooks/useSearchForm";
import SearchForm from "./components/SearchForm"
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {

        myData: {},
        chuckNorisJokes: {}
    }
  }

  componentDidMount() {

    fetch("http://localhost:5000/api/players")
    .then(res => res.json())
    .then(res => this.setState({myData: res}))
    .catch(err => console.log(err))

    axios.get("https://api.icndb.com/jokes/")
    .then(res => {
      console.log(res)
      this.setState({chuckNorisJokes: res.data.value})
    })
    .catch(err => console.log(err))
    console.log("data from api", this.state)
    window.addEventListener("resize", this.handleResize)


  }
  

  render() {

    console.log("data from api", this.state)
    if(this.state.myData.length > 0) {
      console.log("world cup", this.state.myData)
      console.log("jokes", this.state.chuckNorisJokes)

    }


    return (
      <div className="App">
        <SearchForm />
        {/* form to pick the dataset */}
        {/* form is custom hook */}
        {/* the local storage inside the form is also a custom hook */}
      </div>
    );
  }
  
}

export default App;
