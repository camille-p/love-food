import React, { Component } from 'react';
import './App.css';
// import Container from './Container.js'

const appID= "1a2f22c1"
const appKey= "c96e4be61d22ecc5470efed6e861855b"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      results: []
    }
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = (query) => {
    fetch (`https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}&to=30`)
    .then (res => res.json())
    .then (responseData => console.log(responseData))
      //{
      //this.setState ({
       // results: responseData.results,
     ////});
    //})
    .catch (err => {
      console.log(err);
    })
  };
  render() {
    
    return (
      <div>
      
      </div>
      
    )
  }
}


export default App;

