import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as savedNamesAPI from '../../utilities/savedNames-api'
import * as notesAPI from '../../utilities/notes.api'
import { useNavigate } from "react-router-dom";
import './NotesPage.css';


export default function NotesPage() {

    let { id } = useParams()

    const [notes, setNotes] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        async function getSavedNames() {
            const savedName = await savedNamesAPI.getOne(id)
            if (savedName) {setNotes(savedName.notes)}
        }
        getSavedNames()
    }, [])

    const handleSave = async (event) => {
        event.preventDefault()
        await notesAPI.addNote(id, notes)
        navigate("/savedNames")
    }

    const handleChange = (event) => {
        setNotes(event.target.value)
    }

    const handleDelete = async (event) => {
        event.preventDefault()
        await notesAPI.deleteNote(id, notes)
        navigate("/savedNames")
    }


    return (
        <>
            <div className="notes-form">
                <h1>Notes</h1>
                <p>{notes}</p>
                <form>
                    <textarea type="text" placeholder="Enter notes here" value={notes} onChange={handleChange} className='input-notes'/>
                </form>
                <button onClick={handleSave} className='save-notes-button'>Save Notes</button>
                <button onClick={handleDelete} className='delete-notes-button'>Delete Notes</button>
            </div>
        </>
    )   
}