import { configureStore } from "@reduxjs/toolkit";

import QuestionsReducers from "./Redux/Questions/Questions-reducers";
export const store = configureStore({
    reducer:{
        questionsReducers: QuestionsReducers
        // modal:
    },
})