import React from 'react';
import { style } from './style.js';


class Container extends React.Component {
    state= {
        searchText:''
    }
    onSearchChange= e => {
        this.setState ({
            searchText: e.target.value
        })
    }
    handleSubmit= e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
    } 
    render() {
        return (
        <form onSubmit={this.handleSubmit} style={headerStyle} className="flexContainer">
        <input 
        type="search" 
        onChange= {this.onSearchChange}
        name="search"
        ref= {(input) => this.query= input}
        placeholder="Search Recipes" 
        style={inputStyle} />
        <button type="submit" style={buttonStyle} >Search</button>
        <div id="results"></div>
        </form>
        )
    }
}

const headerStyle = {
    color: style.color,
    fontFamily: style.fontFamily,
    background: style.backgroundContainer,
    height: 500,
    margin: 0
}
const inputStyle= {
    width: 300,
    padding: 10,
    fontSize: 16,
    margin: 20,
    height: 40,
    display: "block"
}
const buttonStyle= {
    padding: 10,
    borderRadius: 15,
    margin: 15,
    marginLeft: 0,
    fontSize: 16
}

export default Container