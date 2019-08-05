import React, { Component } from 'react';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';
import UserName from './UserName'

class App extends Component {
  
  render () {
    return (
        <div className="wrapper">
          <h2>Reaction</h2>
          <UserName />
          <PublishMessage />
          <hr />
          <MessageBoard />
        </div>
        
    )
  }
}


export default App;