import React from 'react'
import { FaSistrix } from "react-icons/fa";

const Search = ({ handleSearchNote}) => {
  return (
    <div className='search'>
     <FaSistrix className="search-icon" style={{size: "1.3rem"}}/>
     <input type="text" placeholder='type to search...' onChange={(event)=> handleSearchNote(event.target.value)}/>
      
    </div>
  )
}

export default Search
