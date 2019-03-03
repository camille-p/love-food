import React, { Component } from 'react';
import './App.css';
import Container from './Container.js'

const appID= "1a2f22c1"
const appKey= "c96e4be61d22ecc5470efed6e861855b	—"
const input = document.getElementsById("searchField");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null
    }
  }
  const searchRecipe = (query) => {
    return fetch (`https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}&from=20`)
  };
  
  async function fetchData() {
    const userInput= input.value;
    const response= await searchRecipe(userInput);
    const data= await response.json();
    console.log(data);
  }

  componentDidMount() {
    this.fetchData();
  }
  render() {
    
    return (
      <div>
        {this.state.loading || !this.state.data? (
          <div>loading...</div>
        ) : (
          <div>{this.state.data}</div>
        )
        }
      </div>
      
    )
  }
}
input.addEventListener('keypress', () => {
if (event.keycode === 13) {
  fetchData();
} )

export default App;

