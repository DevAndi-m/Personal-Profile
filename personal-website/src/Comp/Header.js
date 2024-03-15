import React from 'react'
import './Comp-css/Header.css';

function Header() {
  return (
    <div className='header'>
      <div className='linkContainer'>
        <h3><a>Home</a></h3>
        <h3><a>About Me</a></h3>
        <h3><a>My Work</a></h3>
        <h3><a>Gallery</a></h3>
      </div>
    </div>
  )
}

export default Header
