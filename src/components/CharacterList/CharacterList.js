import React, { Component } from 'react';
import './characterlist.scss';
import Loader from '../Loader/Loader';
import CharacterCard from '../CharacterCard/CharacterCard';
import Filters from '../Filters/Filters';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CharacterList extends Component {
    render() {
        const { loading, filterResults, searchedInfo, query } = this.props;
        const filterCharacter = filterResults();
        return (
            <React.Fragment>
                <Filters 
                searchedInfo={searchedInfo}
                query={query}
                />
                {loading ? (
                    <Loader />
                ) : (
                        <ul className="list__characters">
                            {filterCharacter.map(character => {
                                return <Link key={character.id}  to={`/${character.id}`} className="link__character">
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