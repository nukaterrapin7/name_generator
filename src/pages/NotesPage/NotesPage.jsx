import { useNavigate } from 'react-router-dom';
import * as userService from '../../utilities/users-service'
import { useState, useEffect } from 'react'
import * as notesAPI from '../../utilities/notes-api'


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
        return (<p>{note.name}</p>)
    }) : <p>Loading</p>

    return (
        <>        
            <h1>Notes</h1>
            <a>{notesList}</a>
        </>
    )
}