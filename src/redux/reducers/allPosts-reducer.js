import {
POST_LOADING,
POST_STOP_LOADING,
POST_SET_ERRORS,
POST_CLEAR_ERRORS,
POST_SET_DATA

} from '../constants';
    
//estado que va a tener por default
const initialState = {
    data:[],
    loading:false,
    error:{}
}
    
export default (state = initialState, action) => {
  switch(action.type) {
    case POST_LOADING:
    return Object.assign({},state,{loading:true})
    case POST_STOP_LOADING:
    return Object.assign({},state,{loading:false})
    case POST_SET_ERRORS:
    return Object.assign({},state,{error:action.data})
    case POST_CLEAR_ERRORS:
    return Object.assign({},state,{error:{}})
    case POST_SET_DATA:
    return Object.assign({},state,{data:action.data})
    default:
      return Object.assign({},state);
  }
}