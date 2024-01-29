import { useDispatch,useSelector } from "react-redux";
import { getQuestionSuccess,getQuestionFailure,getQuestionRequest } from "./Questions-reducers";
import axios from 'axios'
import { AxiosFunction } from "../../utils/axiosRequest";
const careerTestId = "9bfa90ad-5485-41e2-a8c5-72443e331dc9";

export const GetAllQuestions = () => async (dispatch) => {
    try {

      await dispatch(AxiosFunction({
        url: `/career-test/${careerTestId}/questions`,
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
          
          url: `/career-test/${careerTestId}`,
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