import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CharacterCard extends Component {
    render() {
        const { image, name, house }=this.props;
        return (
            <React.Fragment>
                <img src={image} alt={name} />
                <h2 className="character__name">{name}</h2>
                <p className="character__home">{house}</p>
            </React.Fragment>
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