import {
    UI_LOADING,
UI_STOP_LOADING,
UI_SET_ERRORS,
UI_CLEAR_ERRORS
} from '../constants';
    
//estado que va a tener por default
const initialState = {
    loading:false,
    error:{}
}
    
export default (state = initialState, action) => {
  switch(action.type) {
    case UI_LOADING:
    return Object.assign({},state,{loading:true})
    case UI_STOP_LOADING:
    return Object.assign({},state,{loading:false})
    case UI_SET_ERRORS:
    return Object.assign({},state,{error:action.data})
    case UI_CLEAR_ERRORS:
    return Object.assign({},state,{error:{}})
    default:
      return state;
  }
}