import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CharacterCard extends Component {
    render() {
        const { image, name, house }=this.props;
        return (
            <div className="card">
                <img src={image} alt={name} className="character__image" />
                <h2 className="character__name">{name}</h2>
                <p className="character__home">{house}</p>
            </div>
        );
    }
}

CharacterCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired
}

CharacterCard.defaultProps = {
    house: "SIN CASA"
}

export default CharacterCard;