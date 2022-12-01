import { useState } from 'react'
import * as savedNamesAPI from '../../utilities/savedNames-api'
import './ResultsPage.css';


export default function ResultsPage(){
    const [name, setName] = useState(generateName())
    
    function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    function fetchNames(nameType) {
        let names = [];

        switch (nameType) {
            case 'female':
                names = ['Berthefried', 'Tatiana', 'Hildeberg'];
                break;
            case 'male':
                names = ['Bilbo', 'Frodo', 'Theodulph'];
                break;
            case 'surnames':
                names = ['Baggins', 'Lightfoot', 'Boulderhill'];
                break;
            case 'titles':
                names = ['Of The Nine Fingers', 'The Bold', 'The Daft'];
                break;
        }
        return { data: names };
    }
    
    function generateName(gender) {
        const firstNames = fetchNames(gender || pickRandom(['male', 'female']));
        const lastNames = fetchNames('surnames');
        const titleNames = fetchNames('titles');
        const firstName = pickRandom(firstNames.data);
        const lastName = pickRandom(lastNames.data);
        const titleName = pickRandom(titleNames.data);
        return `${firstName} ${lastName} ${titleName}`
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