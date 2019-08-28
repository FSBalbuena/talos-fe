import axios from 'axios';
import { 
    POST_LOADING,
    POST_STOP_LOADING,
    POST_SET_ERRORS,
    POST_CLEAR_ERRORS,
    POST_SET_DATA,
    POST_CLEAR_DATA,
   } from '../constants';

const postLoading = () => ({
    type: POST_LOADING
  });
  
const postStopLoading = () => ({
      type: POST_STOP_LOADING
    });
  
const postSetErrors = (data) => ({
      type: POST_SET_ERRORS,
      data
    });
const postClearErrors = () => ({
      type: POST_CLEAR_ERRORS
    });
  
const postSetData = (data) => ({
      type: POST_SET_DATA,
      data
    });
const postClearData = () => ({
      type: POST_CLEAR_DATA
    });
  
export const fetchAllPosts = () => dispatch =>{
  dispatch(postLoading())
  dispatch(postClearErrors())

  return axios.get("http://192.168.0.8:3000/posts")
  .then(res=>res.data)
  .then(posts=>dispatch(postSetData(posts)))
  .catch(err=>dispatch(postSetErrors(err.response.data)))
  .then(()=>dispatch(postStopLoading()))
}
