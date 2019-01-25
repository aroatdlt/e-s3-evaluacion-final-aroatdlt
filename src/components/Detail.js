import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Detail extends Component {
    render() {
        if(!this.props.characterInfo){
            return (
                <p>Este hechizo no ha funcionado</p>
            )
        } else {
            const { name, image, house, yearOfBirth, patronus, alive } = this.props.characterInfo;
            return (
                <React.Fragment>
                    <div className="character__info--card">
                    <Link to="/">Busca otro personaje</Link>
                        <img src={image} alt={name}/>
                        <h2 className="character__name">{name}</h2>
                        <ul className="character__info--complete">
                            <li className="character__house">Casa: {house}</li>
                            <li className="character__birthday">Nacimiento: {yearOfBirth}</li>
                            <li className="character__patronus">Patronus: {patronus}</li>
                            <li className="character__live">Estado: {alive}</li>
                        </ul>
                    </div>
                </React.Fragment>
                
            );
        }
    }
}

Detail.propTypes = {
    characterInfo: PropTypes.objectOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            house: PropTypes.string.isRequired,
            yearOfBirth: PropTypes.number.isRequired,
            patronus: PropTypes.string.isRequired,
            alive: PropTypes.string.isRequired
        })
    )
}

export default Detail;