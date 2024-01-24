import { createSlice } from "@reduxjs/toolkit";
// import cartItems from '../../cartItems';

const initialState = {
    // get question data by id
    getQuestionLoading: false,
    getQuestionError: "",
    questionData: {},
    getQuestionSucesss: false,

    
}

const QuestionsSlice  = createSlice({
    name:"Questions Slice",
    initialState,
    reducers:{
        getQuestionRequest(state){
            state.getQuestionLoading = true;
            state.getQuestionError = "";
            state.questionData = {};
            state.getQuestionSucesss = false
        },
        getQuestionSuccess(state, {payload}){
            state.getQuestionLoading = false;
            state.getQuestionError = "";
            state.questionData = payload;
            state.getQuestionSucesss = true
        },
        getQuestionFailure(state, {payload}){
            state.getQuestionLoading = false;
            state.getQuestionError = payload;
            state.questionData = {};
            state.getQuestionSucesss = false
        },
    }
});

export const {getQuestionSuccess,getQuestionFailure,getQuestionRequest}  = QuestionsSlice.actions

export default QuestionsSlice.reducer