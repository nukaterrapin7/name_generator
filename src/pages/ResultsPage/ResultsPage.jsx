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
                names = ['Olivia', 'Tatiana', 'Amelia', 'Rose', 'Diane', 'Valerie', 'Luna', 'Scarlett', 'Emilia', 'Natalie', 'Alice', 'Savannah', 'Anna', 'Lydia', 'Piper', 'Liliana', 'Maeve', 'Isabel', 'River', 'June', 'Ada', 'Amy', 'Sara', 'Morgan', 'Vera', 'Amra', 'Artin', 'Allisa', 'Esta', 'Claire', 'Jastra', 'Merlara', 'Takari', 'Unae', 'Tamara', 'Vashti', 'Talila', 'Meira', 'Liluth', 'Phyrra', 'Moryggan', 'Kavrala', 'Helartha', 'Allynna', 'Cauladra', 'Dathlue', 'Elénaril', 'Glynnii', 'Keerla', 'Yulmanda', 'Nakrub', 'Lohta', 'Joldrak', 'Karnuul', 'Velzor', 'Sharn', 'Togur', 'Raspustyl', 'Gunther', 'Petrilla', 'Thraugmold', 'Maita', 'Nidar', 'Laegla', 'Dagrun', 'Xaabra', 'Darnath', 'Karnra', 'Firiel', 'Fianna', 'Cael', 'Sigrun', 'Mogun', 'Dathak', 'Haudra', 'Andry', 'Bree', 'Callie', 'Cora', 'Euphemia', 'Jillian', 'Kithri', 'Lavinia', 'Lidda', 'Merla', 'Nedda', 'Paela', 'Portia', 'Seraphina', 'Shaena', 'Trym', 'Vani', 'Verna', 'Neddrey', 'Hilvira', 'Chenlie', 'Sylbrix', 'Uvini', 'Eojen', 'Sylleigh'];
                break;
            case 'male':
                names = ['Norman', 'Benjamin', 'Dave', 'Duane', 'Phillip', 'Russel', 'Geoffrey', 'Lawrence', 'Cesar', 'Alec', 'Alexander', 'Larry', 'Joseph', 'Jeffrey', 'Kevin', 'Freddie', 'Steven', 'Nathan', 'Colby', 'Matthew', 'Edward', 'Michael', 'Timothy', 'Victor', 'Joshua', 'Aduce', 'Allain', 'Arl', 'Argus', 'Chylnoth', 'Bellas', 'Darcassan', 'Durothil', 'Eldar', 'Felaern', 'Ganamede', 'Haryk', 'Galather', 'Ilphas', 'Jhaartael', 'Kahvoerm', 'Khyssoun', 'Lyari', 'Myriil', 'Olaurae', 'Rhothomir', 'Silvyr', 'Taranath', 'Skalanis', 'Zaos', 'Thaldal', 'Argon', 'Bargur', 'Torr', 'Kragg', 'Lorg', 'Orlen', 'Rakkulf', 'Dur', 'Orthr', 'Fisthel', 'Aldgar', 'Kolgrim', 'Zargul', 'Lurgan', 'Valn', 'Klam', 'Burgund', 'Omron', 'Kell', 'Nargurg', 'Ork', 'Zur', 'Komraz', 'Gern', 'Alton', 'Ander', 'Cade', 'Corrin', 'Eldon', 'Errich', 'Finnan', 'Garret', 'Lindal', 'Lyle', 'Merric', 'Milo', 'Osborn', 'Perrin', 'Reed', 'Roscoe', 'Wellby', 'Kastran', 'Danret', 'Andon', 'Kornad', 'Zenlan', 'Flynkin', 'Perner', 'Irapher'];
                break;
            case 'surnames':
                names = ['Sheppard', 'Cook', 'Walton', 'Britt', 'Barrera', 'Garrison', 'Carr', 'Owen', 'McKay', 'Robertson', 'Ross', 'Mercer', 'Cooley', 'Small', 'King', 'Frost', 'Reynolds', 'Cotton', 'Sparks', 'Wolfe', 'Conley', 'Perterson', 'Fowler', 'Stone', 'Collins', 'Brightcloak', 'Amalith', 'Dree', 'Aunglor', 'Falanae', 'Aelasar', 'Floshin', 'Goldenleaf', 'Ithruen', 'Kraok', 'Nlossae', 'Oakstaff', 'Reithel', 'Selakiir', 'Silveroak', 'Tornglara', 'Trueshot', 'Starglance', 'Shyr', 'Yundraer', 'Whitethistle', 'Windwalker', 'Rivleam', 'Moonsnow', 'Mornmist', 'Firecoal', 'Runestone', 'Dawnnose', 'Deeprock', 'Barrelbelly', 'Stubbleback', 'Stoneminded', 'Stonehide', 'Brutemaul', 'Oakenskin', 'Thunderbelly', 'Thunderbeard', 'Ghostaxe', 'Darkface', 'Dawnstone', 'Moonrock', 'Mountainbeard', 'Dobroldson', 'Dawnskull', 'Rocksmith', 'Bronzebrow', 'KlaStonemightggor', 'Hammershield', 'Mountaincall', 'Gravelkeeper', 'Brushgather', 'Goodbarrel', 'Greenbottle', 'High-hill', 'Hilltopple', 'Leagallow', 'Tealeaf', 'Thorngage', 'Tosscobble', 'Underbough', 'Lightfoot', 'Boulderhill', 'Moonfellow', 'Softcloak', 'Underbrace', 'Grassdance', 'Goldbottle', 'Brightwhistle', 'Reedrabbit', 'Cherrybelly', 'Coppermoon', 'Longbrush', 'Smoothfeet', 'Underhill', 'Wildbranch'];
                break;
            case 'titles':
                names = ['of the Forests', 'the Bold', 'the Daft', 'the Undefined', 'the Blessed', 'the Doctor of the World', 'the High Priest of the Dead', 'the Elder of Peace', 'the Lord of Snow', 'the Forgotten', 'the Horrible', 'of the Sun', 'the Unborn', 'the Dread Pirate', 'the Mage of Darkness', 'the Master of Fire', 'the Director of Iron', 'the Lady of Farming', 'the Gardener', 'the Fool', 'of the Vault', 'the Bounty Hunter', 'the Archer', 'the Thinker', 'the Captain', 'the Fiend', 'the One-Armed', 'the Toothless', 'the Scarce', 'the Manipulator of Light', 'the Pit-Master', 'the Chef', 'the Laughing', 'the Crying', 'the Drunkard', 'the Raider', 'the Brave', 'of the Night', 'the Shadowborn', 'the Templar of Storms', 'the Scorched', 'the Keeper of the Seas', 'the Time-Bender', 'the Coward', 'the Lord of the Tower', 'the Horse-Master', 'the Villain', 'the Hero', 'the Chosen'];
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