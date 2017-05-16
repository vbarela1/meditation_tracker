import { combineReducers } from 'redux';
import meditations from './meditations';
import nextId from './nextId';
import filter from './filter';

const rootReducer = combineReducers({
  todos
  nextId
  filter 
});

export default rootReducer;
