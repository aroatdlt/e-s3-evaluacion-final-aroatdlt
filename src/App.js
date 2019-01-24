import React, { Component } from 'react';
import './App.scss';
import { fetchHarry } from './services/InfoAllCharacters';
import Loader from './components/Loader';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoRawPotter: [],
      loading: true,
      query: "",
      filter: [],
    }
    this.searchedInfo = this.searchedInfo.bind(this);
    this.filterResults = this.filterResults.bind(this);
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
          loading: false,
        });
      });
  }

  searchedInfo(event){
    const inputValue = event.currentTarget.value;
    const finalInputValue = inputValue.toLowerCase()
    .split(' ')
    .map((s)=> s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    this.setState({
      query: finalInputValue
    })
  }

  filterResults(){
    const filteredResults = this.state.infoRawPotter.filter(character => {
      return((character.name.includes(this.state.query))? true : false
    )})
    return filteredResults;
  }

  render() {
    const filterCharacter = this.filterResults();
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Personajes de Harry Potter</h1>
        </header>
        <main className="main">
          <label htmlFor="character" />
          <input type="text" id="character" placeholder="Escribe el nombre de tu personaje favorito" onKeyUp={this.searchedInfo}></input>
          {this.state.loading ? (
            <Loader />
          ) : (
              <ul className="list__characters">
                {filterCharacter.map(character => {
                  return <li key={character.id} className="character">
                    <img src={character.image} alt={character.name} />
                    <h2 className="character__name">{character.name}</h2>
                    <p className="character__home">{character.house}</p>
                  </li>
                })}
              </ul>
              )}
        </main>
      </div>
        );
      }
    }
    
    export default App;
