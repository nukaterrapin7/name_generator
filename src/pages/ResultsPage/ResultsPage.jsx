import { useState } from 'react'
import * as notesAPI from '../../utilities/notes-api'


export default function ResultsPage(){
    const [name, setName] = useState(generateName())
    
    function getRandom(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
    }

    function generateName() {
        let firstName = [
            'Bob',
            'Steve',
            'Glen',
            'Diane',
            'Susan',
            'Katie'
        ]
        let lastName = [
            'Smith',
            'Jones',
            'Brown',
            'Cruise',
            'Frost',
            'King'
        ]
        let titleName = [
            'Destroyer',
            'Doom-Bringer',
            'Gardener',
            'Wretched',
            'Forgotten',
            'Timid'
        ]
    

    const name = 
        (firstName[getRandom(0, firstName.length + 1)]) +
        " " +
        (lastName[getRandom(0, lastName.length + 1)]) +
        " " + "the" + " " +
        (titleName[getRandom(0, titleName.length + 1)]);

        console.log(name);
        return name;
    }

    async function saveName() {
        await notesAPI.addNote(name)
        console.log(generateName.name)
    }

    function getNewName() {
        setName(generateName())
    }

    return (
        <>        
            <h1>Results</h1>
            <p>{name}</p>
            <button onClick={saveName}>Save Name</button>
            <button onClick={getNewName}>Generate Name</button>
            <br/>
        </>
    )
}