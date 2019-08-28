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
    default:
      return state;
  }
}