
// Questions-actions.js
import axios from 'axios';
import { getQuestionSuccess, getQuestionFailure, getQuestionRequest } from "./Questions-reducers";
const baseUrl = 'http://192.168.18.10:8000'

export const AxiosFunction = ({ url, method, getSuccess, getFailure, body = null }) => async (dispatch) => {
    try {
      dispatch(getQuestionRequest());
  
      const config = body ? { method, url: baseUrl + url, data: body } : { method, url: baseUrl + url };
      const response = await axios(config);
  
      dispatch(getSuccess(response.data));
    } catch (error) {
      console.error(error);
      dispatch(getFailure(error.message));
    }
  };
  