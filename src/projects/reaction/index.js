import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import PubSub, { PubSubContext } from './pubsub';
import App from './components/App';
import { newMessage } from './actions/messages';
import './index.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store.getState()', store.getState()));

const pubsub = new PubSub();

pubsub.addListener({
  message: messageObject => {
    const { message, channel } = messageObject;

    console.log('recieved message:', message, 'Channel:', channel);

    store.dispatch(message);
  }
});

setTimeout(() => {
  pubsub.publish(
    newMessage({text: 'Hello', user: 'bob'})
  );
}, 1000)

export default () => (
  <Provider store={store}>
    <PubSubContext.Provider value={{ pubsub }}>
      <App />
    </PubSubContext.Provider> 
  </Provider>
);

