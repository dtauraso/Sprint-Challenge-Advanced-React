import React, { useState, useEffect} from 'react';
import axios from "axios"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

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
      // console.log(res)
      this.setState({chuckNorisJokes: res.data.value})
    })
    .catch(err => console.log(err))
    // console.log("data from api", this.state)
    window.addEventListener("resize", this.handleResize)


  }
  
  showWomen = () => {
    if(this.state.myData.length > 0) {
      let nameId = this.state.myData.filter(women => women.id < 30).map(women => ({name: women.name, id: women.id, search: women.searches}))
      // console.log("name id", nameId)
      // console.log("world cup", this.state.myData)
      // return this.state.myData.map(women => 
      // <div>
      //   <p>{women.name}</p>

      // </div>
      // )
      return (
      <LineChart width={1100} height={300} data={nameId}>
      <Line type="monotone" dataKey="search" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" interval={3} />
      <YAxis />
      <Tooltip />
    </LineChart>
      )
    }

  }
  showJokes = () => {
    if(this.state.chuckNorisJokes.length > 0) {
      // console.log("world cup", this.state.myData)
      // the replaces didn't work
      let newJokes = this.state.chuckNorisJokes.map(joke => joke.joke.replace('&quot;', '\"'))
      // console.log("new jokes", newJokes)
      return newJokes.map(joke => <p>{joke}</p>)
    }

  }
  render() {

    // console.log("data from api", this.state)

    if(this.state.myData.length > 0) {
      // console.log("world cup", this.state.myData)
      // console.log("jokes", this.state.chuckNorisJokes)

    }


    return (
      <div className="App">
        {/* form will be fake */}
        <SearchForm props={this.state}/>
        {/* the tests can't seem to find any elements returned by these functions */}
        {this.showWomen()}
        {this.showJokes()}
        {/* form to pick the dataset */}
        {/* form is custom hook */}
        {/* the local storage inside the form is also a custom hook */}
      </div>
    );
  }
  
}

export default App;
