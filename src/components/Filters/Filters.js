import React, { Component } from 'react';
import './filters.scss';
import PropTypes from "prop-types";

class Filters extends Component {
    render() {
        const { searchedInfo, query } = this.props;
        return (
            <div className="input__container">
                <label htmlFor="character" />
                <input 
                className="input__search"
                type="text" 
                id="character" 
                placeholder="Escribe el nombre de tu personaje favorito" 
                onChange={searchedInfo}
                value={query}
                ></input>
            </div>
        );
    }
}

Filters.propTypes = {
    searchedInfo: PropTypes.func.isRequired
}

export default Filters;