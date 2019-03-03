import React, { Component } from 'react';
import { style } from './style.js';
import App from './App.css'

class Container extends React.Component {
    render() {
        return (
        <main style={headerStyle} className="flexContainer">
        <input type="text" placeholder="Search Recipes" style={inputStyle} id="searchField"/>
        </main>
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


export default Container