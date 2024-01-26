import { useDispatch,useSelector } from "react-redux";
import { getQuestionSuccess,getQuestionFailure,getQuestionRequest } from "./Questions-reducers";
import axios from 'axios'
import { AxiosFunction } from "../../utils/axiosRequest";
export const GetAllQuestions = () => async (dispatch) => {
    try {
      await dispatch(AxiosFunction({
        url: '/career-test/0534ef52-a76a-4546-a1c7-5f819275668c/questions',
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
          
          url: `/career-test/0534ef52-a76a-4546-a1c7-5f819275668c`,
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