import NoteCard from '../../components/NoteCard/NoteCard'
import { useState, useEffect } from 'react'
import * as notesAPI from '../../utilities/notes-api'
import './NotesPage.css';


export default function NotesPage(){

    const [notes, setNotes] = useState([])

    useEffect(() => {
        async function getNotes() {
            const notes = await notesAPI.getAll()
            setNotes(notes)
        }
        getNotes()
    }, [])
    console.log(notes)
    
    const notesList = notes.length ? notes.map((note) => {
        return (<NoteCard note={note}/>)
    }) : <p>No Saved Names Yet</p>

    return (
        <>        
            <h1>Saved Names</h1>
            <div className='notesList'>
                {notesList} 
            </div>
        </>
    )
}