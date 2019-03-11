import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)

class Header extends React.Component {
    render() {
        return (
        <header>
        <h1>We <FontAwesomeIcon icon="heart" /> Food!</h1>
        </header>
        )
    }
}


export default Header