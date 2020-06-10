import React, { Component } from 'react';
import './App.scss';

import Card from './Components/Card';
import Input from './Components/Input';


class App extends Component {
  state = {
    users: [],
    pages: 1,
    userInput: ''
  };

  fillState = (data) => {
    this.setState({
      users: data.results
    })
  }
  componentDidMount() {
    fetch(`/personnages/page/${this.state.pages}`)
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
    this.setState({
      pages
    })
  }
  handleChange = (event) => {
    let value = event.target.value
    this.setState({
      userInput: value
    })
  }
  handleSubmit = () => {
    fetch(`/personnages/people/${this.state.userInput}`)
      .then(res => res.json())
      .then(users => this.fillState(users));
    this.setState({
      userInput: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Star Wars Character</h1>

        <Input onChange={this.handleChange} />

        <button onClick={this.handleSubmit}>Search</button>
        <div className='cards'>
          {this.state.users.map(user =>
            <Card user={user} />
          )}
        </div>
        <button onClick={this.previousPage}>Previous page</button>
        <button onClick={this.nextPage}>Next Page</button>
      </div>
    );
  }
}
export default App;