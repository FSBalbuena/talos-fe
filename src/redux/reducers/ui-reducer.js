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
    default:
      return state;
  }
}