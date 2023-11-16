import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <a href="#mission" className="navigation-links-link">
        {props.text}
      </a>
      <a href="#youth" className="navigation-links-link1">
        {props.text1}
      </a>
      <a href="#search" className="navigation-links-link2">
        {props.text2}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text1: 'Youth',
  text: 'Mission',
  text2: 'Library',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
