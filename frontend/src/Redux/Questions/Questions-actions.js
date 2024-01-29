import { useDispatch,useSelector } from "react-redux";
import { getQuestionSuccess,getQuestionFailure,getQuestionRequest } from "./Questions-reducers";
import axios from 'axios'
import { AxiosFunction } from "../../utils/axiosRequest";
const careerTestId = "30d23561-2c3d-4fe2-8b12-bc2e12d99cd0";

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