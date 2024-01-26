// Questions-actions.js
import axios from 'axios';
const baseUrl = 'http://192.168.18.111:8000';

export const AxiosFunction = ({ url, method = 'GET', getSuccess, getRequest, getFailure, body = null }) => async (dispatch) => {
  try {
    dispatch(getRequest());
    const config = {
      method,
      url: baseUrl + url,
      data: body,
    };

    const response = await axios(config);

    dispatch(getSuccess(response.data));
  } catch (error) {
    console.error('Axios Error:', error);
    dispatch(getFailure(error.message));
  }
};

