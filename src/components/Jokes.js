import React, { Component } from 'react';


const Joke = ({ joke : { setup, punchline } }) => {
  return (<p style={{ margin:'0 20' }}>{setup} <em>{punchline}</em></p>);
}

class Jokes extends Component {
  state = { joke: {}, jokesArr: [] }

  componentDidMount() {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(json => this.setState({ joke: json }))
    .catch(error => alert(error.message))
  }

  getJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
    .then(response => response.json())
    .then(json => this.setState({ jokesArr: json}))
    .catch(error => alert(error.message))
  }

  render() {

    return (
      <div>
        <h2>Highlighted Jokes</h2>
        <Joke joke={this.state.joke}/>
        <hr />
        <h3>Get a big bunch of jokes</h3>
        {
          this.state.jokesArr.map(joke => ( <Joke key={joke.id} joke={joke}/>))
        }
        <button onClick={this.getJokes}>Get jokes</button>
      </div>

    )
  }
}

export default Jokes;