import { USER_NAME } from './types';

export const userName = user => ({
  type: USER_NAME,
  user
})