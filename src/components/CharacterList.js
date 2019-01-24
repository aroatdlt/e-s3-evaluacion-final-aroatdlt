import React, { Component } from 'react';
import Loader from './Loader';

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
                                return <li key={character.id} className="character">
                                    <img src={character.image} alt={character.name} />
                                    <h2 className="character__name">{character.name}</h2>
                                    <p className="character__home">{character.house}</p>
                                </li>
                            })}
                        </ul>
                    )}
            </React.Fragment>
        );
    }
}

export default CharacterList;