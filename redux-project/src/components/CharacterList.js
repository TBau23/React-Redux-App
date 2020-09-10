import React from 'react';
import { connect } from 'react-redux'

import Character from './Character'

function CharacterList (props) {

    return(
        <div>
            <h3>Character List</h3>
    
            {props.characters.map((character, index) => {
                return <Character key={character.id} character={character} index={index}/>
            })}
        </div>
    )

}

function mapStateToProps(state) {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps, {})(CharacterList)
