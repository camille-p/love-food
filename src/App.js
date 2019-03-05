import React, { Component } from "react";
import "./App.css";
import SearchBar from "./Container.js";
import RecipeList from "./RecipeList.js";

const appID = "1a2f22c1";
const appKey = "c96e4be61d22ecc5470efed6e861855b";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  fetchData = query => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}&to=30`;
    fetch(url)
      .then(res => res.json())
      .then(results => {
        this.setState({
          results: results.hits
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <SearchBar handleSubmit={this.fetchData} />
        <RecipeList results={this.state.results} />
      </div>
    );
  }
}

export default App;
