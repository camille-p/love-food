import React, { Component } from 'react';
import { style } from './style.js';

class Container extends React.Component {
    render() {
        return (
        <container style={headerStyle}>
        <input type="text" value="" placeholder="Search by Book Title or Author" style={inputStyle}/>
        <button style={buttonStyle}>Search</button>
        </container>
        )
    }
}

const headerStyle = {
    color: style.color,
    fontFamily: style.fontFamily,
    background: "style.backgroundContainer",
    height: 400,
    margin: 0
}
const inputStyle= {
width: 300,
padding: 10,
fontSize: 16,
margin: 20
}
const buttonStyle= {
    padding: 10,
    borderRadius: 15,
    margin: 15,
    marginLeft: 0,
    fontSize: 16
}

export default Container