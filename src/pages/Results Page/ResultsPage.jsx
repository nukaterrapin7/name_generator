
import { Link, useNavigate } from 'react-router-dom';
import * as userService from '../../utilities/users-service'
import { useState, useEffect } from 'react'
import * as notesAPI from '../../utilities/notes-api'
import NavBar from '../../components/NavBar/NavBar';

export default function ResultsPage(){

    const [name, setName] = useState(
        // {first: Joe, last: Swanson}
    ) 
    const navigate = useNavigate()

    useEffect(()=>{
        console.log('Use Effect')
    }, [name])

    async function handleCheckToken() {
        const expDate = await userService.checkToken()
        console.log(expDate)
    }

    async function saveName() {
        //1. make a request to the back end at a specific route and controller
        await notesAPI.addNote()
        navigate('/results')
        //2. The controller function needs to call a note model that will create a note with the data in the state variable
        console.log(name)
    }

    return (
        <>        
            <NavBar />
            <h1>Results</h1>
            <p name={name} setName={setName}>{ name.first } { name.last }</p>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
            <button onClick={saveName}>Save Name</button>
        </>
    )
}