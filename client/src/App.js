import React, { Component } from 'react';
import './App.scss';
// import './Components/Card.scss';

import Card from './Components/Card';
import InputCharacter from './Components/InputCharacter';


class App extends Component {
  state = {
    users: [],
    pages: 1,
    fillWithPlanet: false,
    fillWithStarship: false
  };

  fillState = (data) => {
    this.setState({
      users: data.results
    })
  }
  componentDidMount() {
    fetch(`/personnages/people/page/${this.state.pages}`)
      .then(res => res.json())
      .then(users => this.fillState(users));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pages !== this.state.pages) {
      fetch(`/personnages/page/${this.state.pages}`)
        .then(res => res.json())
        .then(users => this.fillState(users));
    }
  }
  nextPage = (event) => {
    event.preventDefault()
    let pages = this.state.pages
    pages++
    this.setState({
      pages
    })
  }
  previousPage = (event) => {
    event.preventDefault()
    let pages = this.state.pages
    pages--
    if (pages <= 1) {
      pages = 1
    }
    this.setState({
      pages
    })
  }

  render() {
    if (this.state.fillWithPlanet) {
      fetch(`/personnages/planets/page/${this.state.pages}`)
        .then(res => res.json())
        .then(users => this.fillState(users));
    }
    if (this.state.fillWithStarship) {
      fetch(`/personnages/starships/page/${this.state.pages}`)
        .then(res => res.json())
        .then(users => this.fillState(users));
    }
    return (
      <div className="App">
        <h1>Swapi</h1>

        <InputCharacter onChange={this.handleChange} fillState={this.fillState} />
        <div className='request-container'>
          <p className='request-container__btn' onClick={() => this.setState({ fillWithPlanet: !this.state.fillWithPlanet, fillWithStarship: false })}>Search by planet</p>
          <p className='request-container__btn' onClick={() => this.setState({ fillWithStarship: !this.state.fillWithStarship, fillWithPlanet: false })}>Search by starships</p>
        </div>
        <button onClick={this.handleSubmit}>Search</button>
        <div className='list-container'>
          <ul className="list">
            {this.state.users.map(user =>
              <Card user={user} />
            )}
          </ul>
        </div>

        <div>
          <button className='btn' onClick={this.previousPage}>Previous page</button>
          <button className='btn' onClick={this.nextPage}>Next Page</button>
        </div>
      </div>
    );
  }
}
export default App;