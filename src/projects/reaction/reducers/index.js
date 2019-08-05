import { combineReducers } from 'redux';
import messagesReducer from './messages';
import userReducer from './userName';
import reactionsReducer from './reactions';


export default combineReducers({
  messages: messagesReducer,
  user: userReducer,
  reactions: reactionsReducer
});