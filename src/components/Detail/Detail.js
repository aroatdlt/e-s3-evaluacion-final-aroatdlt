import React, { Component } from 'react';
import './detail.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Detail extends Component {
    render() {
        if (!this.props.characterInfo) {
            return (
                <React.Fragment>
                    <p className="loader__detail">Este hechizo se está invocando...</p>
                </React.Fragment>
            )
        } else {
            const { name, image, house, yearOfBirth, patronus, alive } = this.props.characterInfo;
            return (
                <React.Fragment>
                    <Link to="/" className="link__back">Busca otro personaje aquí</Link>
                    <div className="character__info--card">
                        <img src={image} alt={name} className="character__image--detail" />
                        <ul className="character__info--complete">
                            <li className="character__name--detail">{name}</li>
                            <li className="character__birthday">Nacimiento: {yearOfBirth}</li>
                            <li className="character__patronus">Patronus: {patronus}</li>
                            <li className="character__live">Estado: {alive}</li>
                            <li className="character__home--detail">Casa: {house}</li>
                        </ul>
                    </div>
                </React.Fragment>
            );
        }
    }
}

Detail.propTypes = {
    characterInfo:
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            house: PropTypes.object.isRequired,
            yearOfBirth: PropTypes.number.isRequired,
            patronus: PropTypes.string.isRequired,
            alive: PropTypes.object.isRequired
        })

}

export default Detail;