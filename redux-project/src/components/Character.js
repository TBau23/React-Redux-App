import React from 'react';
import './Character.css'

function Character({character}) {

    return (
        <div className='character'>
            <img src={character.image} />
            <h3>{character.name}</h3>
            <p>Species: {character.species}</p>
            {character.type !== '' ? <p>Type : {character.type}</p> : <p></p>}
            <button>Save a Character</button>
            
        </div>
    )

}

export default Character;