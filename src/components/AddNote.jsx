import React from 'react'
import { useState } from 'react'

const AddNote = ({handleAddNote}) => {
    const [Notetxt, setNotetxt] = useState('')
    const CharLimit= 200;

    const handleChange = (event) =>{
        if(CharLimit - event.target.value.length >=0){
        setNotetxt(event.target.value)}
    }

    const handleSave = ()=>{
        if(Notetxt.trim().length > 0){
            handleAddNote(Notetxt)
            setNotetxt('')
        }
    }
  return (
    <div className='note new'>
      <textarea rows="8" cols="10" placeholder='Type to add a note' value={Notetxt} onChange={handleChange}></textarea>
      <div className="note-footer">
        <small>{CharLimit- Notetxt.length} remaining</small>
        <button className="save" onClick={handleSave}>Add</button>
      </div>
    </div>
  )
}

export default AddNote
