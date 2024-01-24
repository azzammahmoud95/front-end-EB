import { useDispatch,useSelector } from "react-redux";
import { getQuestionSuccess,getQuestionFailure,getQuestionRequest } from "./Questions-reducers";
import axios from 'axios'
export  const GetAllQuestions = () => async (dispatch) => {
    
    
    try{
    const allQuestions = await axios.get('http://192.168.18.10:8000/career-test/4c8e4ab0-cd01-482f-81f5-6cd81f44b2bd/questions');
    
    dispatch(getQuestionSuccess(allQuestions.data));
    }catch(error){
        console.log(getQuestionFailure(error.message))
    }
}