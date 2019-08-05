import PubNub from 'pubnub';
import { createContext } from 'react';
import pubnubConfig from './pubnub.config';


export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

class PubSub {
  constructor() {
    this.pubnub = new PubNub(pubnubConfig);

    //subscribing to the channel
    this.pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });
  }

  //listening this channel
  addListener = listenerConfig => {
    this.pubnub.addListener(listenerConfig);
  }

  //publishing in this channel
  publish = message => {
    console.log('Publish message', message);
    this.pubnub.publish({
      message,
      channel: MESSAGE_CHANNEL
    });
  }
}

export const PubSubContext = createContext();

export default PubSub;