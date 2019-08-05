import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REACTION_OBJECTS } from '../actions/types';
import { PubSubContext } from '../pubsub';
import { createReaction } from '../actions/reactions';


class CreateReaction extends Component {
  publishReaction = ({ type, emoji }) => () => {

    const { user, messageId } = this.props;

    this.context.pubsub.publish(createReaction({ type, emoji, user, messageId }));
  }

  render() {
    return (
      <div style={{margin: 10}}>
        {
          REACTION_OBJECTS.map(REACTION_OBJECT => {
            const { type, emoji } = REACTION_OBJECT;

            return (
              <span
                onClick={ this.publishReaction({ type, emoji })}
                key={type}
                style={{margin: 5, cursor: 'pointer'}}
              >
                {emoji}
              </span>
            )
          })
        }
      </div>
    )
  }
  static contextType = PubSubContext;
}
export default connect(({ user }) => ({ user }))(CreateReaction);