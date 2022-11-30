import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as notesAPI from '../../utilities/notes-api'


export default function NotesDetailsPage() {

    let { id } = useParams()

    const [details, setDetails] = useState([])

    useEffect(() => {
        async function getNotes() {
            const details = await notesAPI.getOne(id)
            setDetails(details)
        }
        getNotes()
    }, [])

    return (
        <>
            <h1>Note Details</h1>
            <form>
                <input type="text" placeholder="Enter notes here"/>
                <br/>
                <button>Save Notes</button>
                <button>Delete Notes</button>
                <button>Edit Notes</button>
            </form>
        </>
    )   
}