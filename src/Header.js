import React, { Component } from 'react';
import { style } from './style.js';

class Header extends React.Component {
    render() {
        return (
        <header style={headerStyle}>
        <h1 style={h1Style}>We Love Books!</h1>
        </header>
        )
    }
}

const headerStyle = {
    color: style.backgroundFooter,
    fontFamily: style.fontFamily,
    background: style.backgroundHeader,
    height: 100,
    margin: 0
}
const h1Style = {
    fontSize: 32,
    padding: 35 
}

export default Header