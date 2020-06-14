import React, { Component } from 'react';
import './App.scss';
// import './Components/Card.scss';

import Card from './Components/Card';
import InputCharacter from './Components/InputCharacter';


class App extends Component {
  state = {
    users: [],
    pages: 1,
    request: 'people',
  };

  fillState = (data) => {
    this.setState({
      users: data.results
    })
  }
  componentDidMount() {
    fetch(`/personnages/${this.state.request}/page/${this.state.pages}`)
      .then(res => res.json())
      .then(users => this.fillState(users));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pages !== this.state.pages || prevState.request !== this.state.request) {
      fetch(`/personnages/${this.state.request}/page/${this.state.pages}`)
        .then(res => res.json())
        .then(users => this.fillState(users));
    }
    if (prevState.request !== this.state.request) {
      this.setState({
        pages: 1
      })
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
    return (
      <div className="App">
        <h1 className='title'>Swapi</h1>

        <InputCharacter request={this.state.request} fillState={this.fillState} />
        <div className='request-container'>
          <button className='request-container__btn request-container__btn--search' onClick={() => this.setState({ request: 'planets' })}>Search by planet</button>
          <button className='request-container__btn request-container__btn--search' onClick={() => this.setState({ request: 'starships' })}>Search by starships</button>
        </div>
        <div className='list-container'>
          <ul className="list">
            {this.state.users.map(user =>
              <Card user={user} request={this.state.request} />
            )}
          </ul>
        </div>

        <div className='container'>
          <button className='container__btn' onClick={this.previousPage}>Previous page</button>
          <button className='container__btn' onClick={this.nextPage}>Next Page</button>
        </div>
      </div>
    );
  }
}
export default App;