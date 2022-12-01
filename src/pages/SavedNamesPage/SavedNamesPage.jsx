import './SavedNamesPage.css';
import NoteCard from '../../components/NoteCard/NoteCard'
import { useState, useEffect } from 'react'
import * as savedNamesAPI from '../../utilities/savedNames-api'


export default function SavedNamePage(){

    const [savedNames, setSavedNames] = useState([])

    useEffect(() => {
        async function getSavedNames() {
            const savedNames = await savedNamesAPI.getAll()
            setSavedNames(savedNames)
        }
        getSavedNames()
    }, [])
    console.log(savedNames)
    
    const savedNamesList = savedNames.length ? savedNames.map((savedName, key) => {
        return (<NoteCard key={key} savedName={savedName}/>)
    }) : <p>No Saved Names Yet</p>

    return (
        <>        
            <h1>Saved Names</h1>
            <div className='savedNamesList'>
                {savedNamesList} 
            </div>
        </>
    )
}