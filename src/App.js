import { useEffect, useState } from 'react';
import './App.css'
import { nanoid } from 'nanoid';
import NoteList from './components/NoteList'
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const[notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'my first note',
      date: '9/01/2023',
    }, {
      id: nanoid(),
      text: 'my second note',
      date: '10/01/2023',
    }, {
      id: nanoid(),
      text: 'my third note',
      date: '11/01/2023',
    },
]);

const [SearchText, setSearchText] = useState('')
const[darkMode, setdarkMode] = useState(false)

useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem('notes'))
   
  if(savedNotes){
      setNotes(savedNotes)
    }

},[])

useEffect(()=>{
  localStorage.setItem('notes', JSON.stringify(notes))
},[notes])

const addNote = (text) =>{
  const date= new Date()
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote]
  setNotes(newNotes)
}

const deleteNote = (id) =>{
  const NewNotes = notes.filter((note) => note.id!== id)
  setNotes(NewNotes)
}

  return (
    <div className={`${darkMode && 'dark-mode'} `}>
      <div className="container">
        <Header handleToggleDarkMode={setdarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NoteList notes={notes.filter((note) => note.text.toLowerCase().includes(SearchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      </div>
    </div>
    
  );
}

export default App;
