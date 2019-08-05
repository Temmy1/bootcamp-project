import uuid from 'uuid/v4';

export const createReaction = ({ type, emoji, user, messageId }) => {
  return {
    type,
    item: {
      id: uuid(),
      timestamp: Date.now(),
      emoji,
      user,
      messageId
    }
  }
}