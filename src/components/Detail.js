import React, { Component } from 'react';

class Detail extends Component {
    render() {
        return (
            <div className="info__character">
                <img className="character__photo" src="" alt=""/>
                <h2 className="character__name"></h2>
                <ul className="info__character">
                    <li className="character__home"></li>
                    <li className="character__birthday"></li>
                    <li className="character__patronus"></li>
                    <li className="character__state"></li>
                </ul>
            </div>
        );
    }
}

export default Detail;