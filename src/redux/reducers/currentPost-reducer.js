import {
  CURRENT_POST_LOADING,
  CURRENT_POST_STOP_LOADING,
  CURRENT_POST_SET_ERRORS,
  CURRENT_POST_CLEAR_ERRORS,
  CURRENT_POST_SET_DATA,
  CURRENT_POST_CLEAR_DATA
} from '../constants';
    
//estado que va a tener por default
const initialState = {
    data:{},
    loading:false,
    error:{}
}
    
export default (state = initialState, action) => {
  switch(action.type) {
  case CURRENT_POST_LOADING:
  return Object.assign({},state,{loading:true})
  case CURRENT_POST_STOP_LOADING:
  return Object.assign({},state,{loading:false})
  case CURRENT_POST_SET_ERRORS:
  return Object.assign({},state,{error:action.data})
  case CURRENT_POST_CLEAR_ERRORS:
  return Object.assign({},state,{error:{}})
  case CURRENT_POST_SET_DATA:
  return Object.assign({},state,{data:action.data})
  case CURRENT_POST_CLEAR_DATA:
  return Object.assign({},state,{data:{}})
    default:
      return Object.assign({},state);
  }
}