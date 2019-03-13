import React from 'react';
import Image from "./images/Edamam.png"

class Footer extends React.Component {
    render() {
        return (
            <footer className="flexFooter">
                <p>Made with love thanks to <a href="https://www.edamam.com/" target="_blank" rel="noopener noreferrer"><img src={Image} alt="Edamam logo" /></a></p>
                <p>Since you're here, why don't you check out <a href="https://wordpress.com/checklist/camille-ux.video.blog" target="_blank" rel="noopener noreferrer">my blog</a></p>
            </footer>
        )
    }
}


export default Footer