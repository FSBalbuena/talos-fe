import { combineReducers } from 'redux';
import allPostsReducer from './allPosts-reducer'
import currentPostReducer from './currentPost-reducer'
import uiReducer from './ui-reducer'

export default combineReducers({
  ui:uiReducer,
  currentPost:currentPostReducer,
  allPosts:allPostsReducer
});