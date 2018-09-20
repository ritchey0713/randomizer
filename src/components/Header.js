import React, { Component } from 'react'

const Header = (props) => (
  <div className="header">
    <div className='container'>
      <h1>{props.title}</h1>
    </div>
  </div>
)

Header.defaultProps = {
  title: "The Randomizer App"
}

export default Header 