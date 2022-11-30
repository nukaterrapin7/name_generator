import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as notesAPI from '../../utilities/notes-api'
import * as detailsAPI from '../../utilities/details.api'
import { useNavigate } from "react-router-dom";


export default function NotesDetailsPage() {

    let { id } = useParams()

    const [details, setDetails] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        console.log(id)
        async function getNotes() {
            const note = await notesAPI.getOne(id)
            console.log("note", note)
            if (note) {setDetails(note.details)}
        }
        getNotes()
    }, [])

    const handleSave = async (event) => {
        event.preventDefault()
        await detailsAPI.addDetail(id, details)
        navigate("/notes")
    }

    const handleChange = (event) => {
        setDetails(event.target.value)
    }

    return (
        <>
            <h1>Note Details</h1>
            <form>
                <input type="text" placeholder="Enter notes here" value={details} onChange={handleChange}/>
                <br/>
                <button onClick={handleSave}>Save Notes</button>
                <button>Delete Notes</button>
            </form>
        </>
    )   
}