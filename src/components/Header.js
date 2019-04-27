import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-map"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>The Lodestone</h1>
                <p>A collection of educational works, ramblings and other ways I stay busy</p>
            </div>
        </div>
        <nav>
            <ul>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li> */}
                <li><a href="https://mjb-blog.netlify.com/" target="_blank">Blog</a></li>
                <li><a href="https://mjb-flashcards.netlify.com/" target="_blank">Flash Cards</a></li>
                <li><a href="https://mjb-presentation.netlify.com/" target="_blank">Presentation</a></li>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li> */}
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
