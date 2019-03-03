import React, { Component } from 'react';
import { style } from './style.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)

class Header extends React.Component {
    render() {
        return (
        <header style={headerStyle}>
        <h1 style={h1Style}>We <FontAwesomeIcon icon="heart" /> Food!</h1>
        </header>
        )
    }
}

const headerStyle = {
    color: style.backgroundContainer,
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