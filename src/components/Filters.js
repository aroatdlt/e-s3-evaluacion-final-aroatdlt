import React, { Component } from 'react';

class Filters extends Component {
    render() {
        const { searchedInfo } = this.props;
        return (
            <React.Fragment>
                <label htmlFor="character" />
                <input type="text" id="character" placeholder="Escribe el nombre de tu personaje favorito" onKeyUp={searchedInfo}></input>
            </React.Fragment>
        );
    }
}

export default Filters;