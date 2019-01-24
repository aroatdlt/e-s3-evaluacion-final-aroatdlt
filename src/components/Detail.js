import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Detail extends Component {
    render() {
        const { name, image, house, yearOfBirth, patronus, alive } = this.props.characterInfo;

        return (
            <React.Fragment>
                <div className="character__info--card">
                <Link to="/">Busca otro personaje</Link>
                    <img src={image} alt={name}/>
                    <h2 className="character__name">{name}</h2>
                    <ul className="character__info--complete">
                        <li className="character__house">{house}</li>
                        <li className="character__birthday">{yearOfBirth}</li>
                        <li className="character__patronus">{patronus}</li>
                        <li className="character__live">{alive}</li>
                    </ul>
                </div>
            </React.Fragment>
            
        );
    }
}

export default Detail;