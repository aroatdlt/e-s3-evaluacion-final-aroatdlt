import React, { Component } from 'react';
import './App.scss';
import { fetchHarry } from './services/InfoAllCharacters';
import Filters from './components/Filters';
import CharacterList from './components/CharacterList';


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

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Personajes de Harry Potter</h1>
        </header>

        <main className="main">
          <Filters searchedInfo={this.searchedInfo} />
          <CharacterList loading={this.state.loading} filterResults={this.filterResults} />
        </main>
      </div>
    );
  }
}

export default App;
