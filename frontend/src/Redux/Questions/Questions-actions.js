import { useDispatch,useSelector } from "react-redux";
import { getQuestionSuccess,getQuestionFailure,getQuestionRequest } from "./Questions-reducers";
import axios from 'axios'
import { AxiosFunction } from "../../utils/axiosRequest";
export const GetAllQuestions = () => async (dispatch) => {
    try {
      await dispatch(AxiosFunction({
        url: '/career-test/4c8e4ab0-cd01-482f-81f5-6cd81f44b2bd/questions',
        method: 'GET',        
        getSuccess: getQuestionSuccess,
        getRequest:getQuestionRequest,
        getFailure: getQuestionFailure,
      }));
    } catch (error) {
      console.log(getQuestionFailure(error.message));
    }
  };

  export const PatchAnswer = ({ answerData }) => async (dispatch) => {
    try {
      await dispatch(
        AxiosFunction({
          
          url: `/career-test/4c8e4ab0-cd01-482f-81f5-6cd81f44b2bd`,
          method: 'PATCH',
          getSuccess: getQuestionSuccess,
          getRequest: getQuestionRequest,
          getFailure: getQuestionFailure,
          body: answerData,
        })
      );
    } catch (error) {
      console.error(getQuestionFailure(error.message));
    }
  };