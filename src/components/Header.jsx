import React from 'react'

const Header = ({handleToggleDarkMode}) => {
  return (
    <div className='header'>
        <h1>SAFE PLACE FOR PLANNING...</h1>
        <button className="save" onClick={() => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)}> Toggle </button>
      
    </div>
  )
}

export default Header
