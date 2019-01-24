import React, { Component } from 'react';
import Loader from './Loader';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
                                return <Link key={character.id}  to={`/${character.id}`}>
                                <li 
                                    className="character">
                                    <CharacterCard 
                                    image={character.image}
                                    name={character.name}
                                    house={character.house}
                                    />
                                </li>
                                </Link>
                            })}
                        </ul>
                    )}
            </React.Fragment>
        );
    }
}

CharacterList.propTypes = {
    loading: PropTypes.bool.isRequired,
    filterResults: PropTypes.func.isRequired,
}

export default CharacterList;