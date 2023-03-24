import React from 'react'

const Note = ({id, text, date, handleDeleteNote}) => {
  return (
    <div className='note'>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <button type='button' className='delete_icon' onClick={ () => handleDeleteNote(id)}>delete</button>
        </div>
      
    </div>
  )
}

export default Note
