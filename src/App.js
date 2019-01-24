import React, { Component } from 'react';
import './App.scss';
import { fetchHarry } from './services/InfoAllCharacters';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoRawPotter: [],
    }
  }

  componentDidMount() {
    fetchHarry()
      .then(data => {
        const newDataWithId = data.map((character, index) => {
          return {
            ...character,
            id: index,
          }
        }
        );
        this.setState({
          infoRawPotter: newDataWithId,
        })
      })
  }

  render() {
    const { infoRawPotter } = this.state;
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Personajes de Harry Potter</h1>
        </header>
        <main className="main">
          <label htmlFor="character" />
          <input type="text" id="character" placeholder="Escribe el nombre de tu personaje favorito"></input>
          <ul className="list__characters">
            {infoRawPotter.map(character => {
              return <li key={character.id} className="character">
                <img src={character.image} alt={character.name} />
                <h2 className="character__name">{character.name}</h2>
                <p className="character__home">{character.house}</p>
              </li>
            }
            )}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
