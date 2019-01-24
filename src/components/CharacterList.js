import React, { Component } from 'react';
import Loader from './Loader';
import CharacterCard from './CharacterCard';

class CharacterList extends Component {
    render() {
        const { loading, filterResults } = this.props;
        const filterCharacter = filterResults();
        return (
            <React.Fragment>
                {loading ? (
                    <Loader />
                ) : (
                        <ul className="list__characters">
                            {filterCharacter.map(character => {
                                return <li 
                                key={character.id} className="character">
                                    <CharacterCard 
                                    image={character.image}
                                    name={character.name}
                                    house={character.house}
                                    />
                                </li>
                            })}
                        </ul>
                    )}
            </React.Fragment>
        );
    }
}

export default CharacterList;