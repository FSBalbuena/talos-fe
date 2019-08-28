import axios from 'axios';
import { 
    POST_LOADING,
    POST_STOP_LOADING,
    POST_SET_ERRORS,
    POST_CLEAR_ERRORS,
    POST_SET_DATA
   } from '../constants';
import {uiLoading,
      uiClearErrors,
      uiSetErrors,
      uiStopLoading} from './ui-actions'


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

  
export const fetchAllPosts = () => dispatch =>{
  dispatch(postLoading())
  dispatch(postClearErrors())

  return axios.get("http://192.168.0.8:3000/posts")
  .then(res=>res.data)
  .then(posts=>dispatch(postSetData(posts)))
  .catch(err=>dispatch(postSetErrors(err.response.data)))
  .then(()=>dispatch(postStopLoading()))
}

export const createNewPost=(body)=>dispatch=>{
  let status={}
  dispatch(uiLoading())
  dispatch(uiClearErrors())
      return axios.post("http://192.168.0.8:3000/posts",body.body)
        .then(res=>res.data)
        .then(res=>{
          status.id=res.id;
          return axios.put(`http://192.168.0.8:3000/posts/${res.id}/picture`,body.image)
        })
        .catch(err=>dispatch(uiSetErrors({message:"Algo Salio mal"})))
        .then(()=>{
          dispatch(uiStopLoading())
          return status
        })
}