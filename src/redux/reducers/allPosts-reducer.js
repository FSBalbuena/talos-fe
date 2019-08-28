import {

POST_LOADING,
POST_STOP_LOADING,
POST_SET_ERRORS,
POST_CLEAR_ERRORS,
POST_SET_DATA,
POST_CLEAR_DATA

} from '../constants';
    
//estado que va a tener por default
const initialState = {
    data:[],
    loading:false,
    error:{}
}
    
export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}