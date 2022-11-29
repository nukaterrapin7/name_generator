import NoteCard from '../../components/NoteCard/NoteCard'
import { useState, useEffect } from 'react'
import * as notesAPI from '../../utilities/notes-api'
import NotesDetailsPage from '../NotesDetailsPage/NotesDetailsPage'


export default function NotesPage(){

    const [notes, setNotes] = useState([])

    useEffect(() => {
        async function getNotes() {
            const notes = await notesAPI.getAll()
            setNotes(notes)
        }
        getNotes()
    }, [])
    
    const notesList = notes.length ? notes.map((note) => {
        return (<NoteCard note={note}/>)
    }) : <p>Loading</p>

    return (
        <>        
            <h1>Saved Names</h1>
            {notesList} 
        </>
    )
}