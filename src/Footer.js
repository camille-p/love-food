import React from 'react';
import { style } from './style.js';


class Footer extends React.Component {
    render() {
        return (
        <footer style={headerStyle} className="flexFooter">
        <p style={pStyle}>Made with love thanks to <a href="https://www.edamam.com/" target="_blank" rel="noopener noreferrer"><img src="images/Edamam.png" alt="Edamam logo"/></a></p>
        <p style={pStyle}>Since you're here, why don't you check out <a href="https://wordpress.com/checklist/camille-ux.video.blog" target="_blank" rel="noopener noreferrer">my blog</a></p>
        </footer>
        )
    }
}

const headerStyle = {
    color: style.backgroundContainer,
    fontFamily: style.fontFamily,
    background: style.backgroundHeader,
    height: 100,
    margin: 0,
}
const pStyle = {
    fontSize: 18,
    padding: 10 
}

export default Footer