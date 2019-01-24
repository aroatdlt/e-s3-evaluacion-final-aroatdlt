import React, { Component } from 'react';

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

export default CharacterCard;