import React from 'react';
import { connect } from 'react-redux';
import CreateReaction from './CreateReaction';

const MessageReactions = ({ messageReactions }) => {
  if(!messageReactions) return null;

  return (
    messageReactions.map( (reaction, index) => {
      const { id, emoji, user } = reaction;

      return (
        <span key={id}>
          <em>{user}:</em>
          {emoji}
          {index !== messageReactions.length - 1 ? ', ' : null }
        </span>
      )
    })
  )
}

const MessageBoard = ({ messages, reactions }) => {
  return (
    <div>
      {
        messages.items.map(message => {
          const { user, text, timestamp, id} = message;

          return (
            <div style={{ border: '1px solid', margin: 10}} key={id}>
              <p><small>{new Date(timestamp).toLocaleString()}</small></p>
              <h4>{user}</h4>
              <p>{text}</p>
              <CreateReaction messageId={id}/>
              <MessageReactions messageReactions={reactions[id]} />
            </div>
          )
        })
      }

    </div>
  )
}
export default connect(
  ({ messages, reactions }) => ({messages, reactions })
)(MessageBoard);