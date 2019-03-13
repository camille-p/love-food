import React, { Component } from "react";
import "./App.css";
import SearchBar from "./Container.js";
import RecipeList from "./RecipeList.js";
import ReactModal from "react-modal";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

library.add(faWindowClose)

const appID = "1a2f22c1";
const appKey = "c96e4be61d22ecc5470efed6e861855b";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [],
      showModal: false,
      selectedRecipe: ""
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal (recipe) {
    this.setState({ showModal: true, selectedRecipe: recipe});
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  fetchData = query => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}&to=30&health=vegetarian`;
    fetch(url)
      .then(res => res.json())
      .then(results => {
        this.setState({
          results: results.hits
        });
        console.log(results)
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <SearchBar handleSubmit={this.fetchData} />
        <RecipeList openModal={this.handleOpenModal} results={this.state.results} />
        <ReactModal 
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          shouldCloseOnEsc={true}
        >
          <FontAwesomeIcon icon="window-close" onClick={this.handleCloseModal}/>
          <div>{this.state.selectedRecipe}</div>
        </ReactModal>
      </div>
    );
  }
}

export default App;
