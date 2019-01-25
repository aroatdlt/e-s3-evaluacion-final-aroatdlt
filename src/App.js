import React, { Component } from 'react';
import './App.scss';
import { fetchHarry } from './services/InfoAllCharacters';
import CharacterList from './components/CharacterList/CharacterList';
import { Route, Switch } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Gryffindor from './images/Gryffindorcrest.jpg';
import Slytherin from './images/Slytherin5.jpg';
import Hufflepuff from './images/Hufflepuffcrest.jpg';
import Ravenclaw from './images/Ravenclawcrest.jpg';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoRawPotter: [],
      loading: true,
      query: "",
      characterData: [],
    }
    this.searchedInfo = this.searchedInfo.bind(this);
    this.filterResults = this.filterResults.bind(this);
  }

  componentDidMount() {
    fetchHarry()
      .then(data => {
        const newDataWithId = data.map((character, index, live, newHouse) => {
          ((character.alive === true) ? live = <i className="fas fa-heartbeat"></i> : live = <i className="fas fa-skull-crossbones"></i>)
          if (character.house === "Gryffindor"){
            newHouse = <img className="character__home"src={Gryffindor} alt={character.house}/>
          } else if (character.house === "Slytherin"){
            newHouse = <img className="character__home" src={Slytherin} alt={character.house}/>
          } else if (character.house === "Ravenclaw") {
            newHouse = <img className="character__home" src={Ravenclaw} alt={character.house}/>
          } else if (character.house === "Hufflepuff") {
            newHouse = <img className="character__home" src={Hufflepuff} alt={character.house}/>
          }
          return {
            ...character,
            id: index,
            alive: live,
            house: newHouse
          }
        }
        );
        this.setState({
          infoRawPotter: newDataWithId,
          loading: false,
        });
      });
  }

  searchedInfo(event) {
    const inputValue = event.currentTarget.value;
    const finalInputValue = inputValue.toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
    this.setState({
      query: finalInputValue
    })
  }

  filterResults() {
    const filteredResults = this.state.infoRawPotter.filter(character => {
      return ((character.name.includes(this.state.query)) ? true : false
      )
    })
    return filteredResults;
  }

  getCharacter(id) {
    const { infoRawPotter } = this.state;
    return infoRawPotter.find(character => character.id === parseInt(id));
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <img className="logo__title"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/2180px-Harry_Potter_wordmark.svg.png" alt="Harry Potter" />
          <h1 className="title">Enciclopedia de personajes</h1>
        </header>
        <main className="main">
          
          <Switch>
            <Route exact
              path="/"
              render={props =>
                <CharacterList
                  loading={this.state.loading}
                  filterResults={this.filterResults}
                  searchedInfo={this.searchedInfo}
                  query={this.state.query} />
              }
            />
            <Route
              path='/:id'
              render={props =>
                <Detail {...props}
                  characterInfo={this.getCharacter(props.match.params.id)}
                />
              }
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
