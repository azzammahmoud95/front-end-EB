import { useDispatch,useSelector } from "react-redux";
import { getQuestionSuccess,getQuestionFailure,getQuestionRequest } from "./Questions-reducers";
import axios from 'axios'
import { AxiosFunction } from "../../utils/axiosRequest";
const careerTestId = "b8f5c6b0-296e-41b1-b4b8-9ed5b7f1897f";

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