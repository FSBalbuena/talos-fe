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

