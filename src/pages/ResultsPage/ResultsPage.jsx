import { useState } from 'react'
import * as savedNamesAPI from '../../utilities/savedNames-api'
import './ResultsPage.css';


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
                <h3>Welcome to the name generator.  
                </h3>
                <br/>
                <h3>
                Clicking on the "Generate Name" button will make a new randomized name, that you can save for future use in your stories when you click on the "Save Name" button.
                </h3>
                <br/>
                <p className='result'>{name}</p>
                <button onClick={saveName} className='save-button'>Save Name</button>
                <button onClick={getNewName} className='generate-button'>Generate Name</button>
                <br/>
            </div>
        </>
    )
}