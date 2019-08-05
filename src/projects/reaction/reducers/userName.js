import { USER_NAME } from '../actions/types';

const DEFAULT_USER = 'Anonimus';

const userReducer = (state = DEFAULT_USER, action) => {
  switch(action.type) {
    case USER_NAME: 
      return action.user;
    default: 
      return state;
  }
}

export default userReducer;