import { useState } from 'react'
import * as savedNamesAPI from '../../utilities/savedNames-api'


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

        return name;
    }

    async function saveName() {
        await savedNamesAPI.addSavedName(name)
    }

    function getNewName() {
        setName(generateName())
    }

    return (
        <>  
            <div className='generation'>      
                <h1>Results</h1>
                <div className='result'>
                    <p>{name}</p>
                </div>
                <button onClick={saveName} className='save-button'>Save Name</button>
                <button onClick={getNewName} className='generate-button'>Generate Name</button>
                <br/>
            </div>
        </>
    )
}