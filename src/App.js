import React, { Component } from "react";
import "./App.css";
import SearchBar from "./SearchBar.js";
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
    this.state = {
      results: [],
      showModal: false,
      selectedRecipe: ""
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal(recipe) {
    this.setState({ showModal: true, selectedRecipe: recipe });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  fetchData = query => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}&to=30&ingr=5`;
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
        <RecipeList openModal={this.handleOpenModal} results={this.state.results} />
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          ariaHideApp={false}
          style={{
            overlay: {
              backgroundColor: '#1b2e15'
            },
            content: {
              backgroundColor: 'rgb(233, 220, 205)',
              color: '#1b2e15'
            }
          }}
        >
          <FontAwesomeIcon icon="window-close" onClick={this.handleCloseModal} />
          <div>
            <h3 style={style}>Ingredients:</h3>
            <p style={style}>{this.state.selectedRecipe[0]}</p>
            <p style={style}>{this.state.selectedRecipe[1]}</p>
            <p style={style}>{this.state.selectedRecipe[2]}</p>
            <p style={style}>{this.state.selectedRecipe[3]}</p>
            <p style={style}>{this.state.selectedRecipe[4]}</p>
          </div>
        </ReactModal>
      </div>
    );
  }
}
const style = {
  padding: 15,
  paddingLeft: 0,
  color: '#1b2e15'
}
export default App;
