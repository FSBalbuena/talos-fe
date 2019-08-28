import axios from 'axios';
import { 
    CURRENT_POST_LOADING,
    CURRENT_POST_STOP_LOADING,
    CURRENT_POST_SET_ERRORS,
    CURRENT_POST_CLEAR_ERRORS,
    CURRENT_POST_SET_DATA,
    CURRENT_POST_CLEAR_DATA
 } from '../constants';

 const currentPostLoading = () => ({
    type: CURRENT_POST_LOADING
  });
  
const currentPostStopLoading = () => ({
      type: CURRENT_POST_STOP_LOADING
    });
  
const currentPostSetErrors = (data) => ({
      type: CURRENT_POST_SET_ERRORS,
      data
    });
const currentPostClearErrors = () => ({
      type: CURRENT_POST_CLEAR_ERRORS
    });
  
const currentPostSetData = (data) => ({
      type: CURRENT_POST_SET_DATA,
      data
    });
const currentPostClearData = () => ({
      type: CURRENT_POST_CLEAR_DATA
    });

export const fetchCurrentPost = (id) => dispatch =>{
  dispatch(currentPostLoading())
  dispatch(currentPostClearErrors())
  return axios.get(`http://192.168.0.8:3000/posts/${id}`)
  .then(res=>res.data)
  .then(post=>dispatch(currentPostSetData(post)))
  .catch(err=>dispatch(currentPostSetErrors({message:"Something its wrong with the id"})))
  .then(()=>dispatch(currentPostStopLoading()))
}

export const clearCurrentPost = () => dispatch =>{
  dispatch(currentPostClearErrors())
  dispatch(currentPostClearData())
  dispatch(currentPostStopLoading())
}