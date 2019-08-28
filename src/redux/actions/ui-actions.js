import axios from 'axios';
import { UI_LOADING,
  UI_STOP_LOADING,
  UI_SET_ERRORS,
  UI_CLEAR_ERRORS  } from '../constants';

// we export this actions becaouse are being used on other model-actions too

export const uiLoading = () => ({
  type: UI_LOADING
});

export const uiStopLoading = () => ({
    type: UI_STOP_LOADING
  });

export const uiSetErrors = (data) => ({
    type: UI_SET_ERRORS,
    data
  });
export const uiClearErrors = () => ({
    type: UI_CLEAR_ERRORS
  });

