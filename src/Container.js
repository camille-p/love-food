import React from "react";
import { style } from "./style.js";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = e => {
    e.preventDefault();
    const text = e.target.text.value;
    this.props.handleSubmit(text);
};
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={headerStyle}
        className="flexContainer"
      >
        <input
          type="text"
          name="text"
          placeholder="Search Recipes"
          style={inputStyle}
        />
      </form>
    );
  }
}

const headerStyle = {
  color: style.color,
  fontFamily: style.fontFamily,
  background: style.backgroundContainer,
  height: 150,
  margin: 0
};
const inputStyle = {
  width: 300,
  padding: 10,
  fontSize: 16,
  margin: 20,
  height: 40,
  display: "block"
};

export default SearchBar;
