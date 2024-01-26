import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/layout";
import BackButton from "../../Components/BackButton/back-button";
import Card from "../../Components/Card/card";
import Button from "../../Components/Button/Button.js";
import Checkbox from "../../Components/Checkbox/Checkbox.js";
import './question-page.scss'
import { GetAllQuestions, PatchAnswer } from "../../Redux/Questions/Questions-actions.js";
import { useDispatch, useSelector } from "react-redux";

export default function QuestionPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState({  
    question:{},
    index: 0
  });
  const [localQuestions, setLocalQuestions ] = useState([]);
   // Added state for the current question index
// useEffect(() => {
//   useGetAllQuestions()
// },[])
const dispatch  = useDispatch();
useEffect(() => {
  dispatch(GetAllQuestions());
},[])


  const handleCheckboxClick = (label) => {
    // Handle the selected value here
    const valueMap = {
      'Not in the Least': 1,
      'Slightly': 2,
      'Moderately': 3,
      'Very Much': 4,
      'Extremely': 5,
    };
  
    setSelectedOption(valueMap[label]);
    console.log(valueMap[label]);
  };
  const questions = useSelector((store) => store.questionsReducers.questionData.questions);
  useEffect(() => {
    if(questions){
      console.log("questions",questions);
      setLocalQuestions([...questions]);


   console.log("localQuestions",localQuestions
   )
setCurrentQuestionIndex({
  question:localQuestions[0],
  index: 0
})
console.log(currentQuestionIndex)
    }
  },[questions])
  
  const handleNextQuestion = async (event) => {
    event.preventDefault();
    const answerData = {
      category: currentQuestionIndex.question.category,
      value: selectedOption,
      question: currentQuestionIndex.question.id,
    };

    console.log('answerData', answerData);
    console.log('himi');

    try {
       dispatch(PatchAnswer({answerData}));

      // Now you can access the response from the action
      setCurrentQuestionIndex({
        question: localQuestions[currentQuestionIndex.index + 1],
        index: currentQuestionIndex.index + 1
      });
      setSelectedOption(null)
    //  console.log( questions);
     console.log(localQuestions)
console.log("after incrementing",currentQuestionIndex)
      console.log('tabi');
    } catch (error) {
      console.error('Error:', error);
    }

  };
  return (
    <Layout>
      <Card
        question={currentQuestionIndex.question?.prompt || "No Internet" }
      >
        
        <form className="form-layout" action="POST" onSubmit={handleNextQuestion}>
          <div>
            <Checkbox label={'Not in the Least'}  onClick={() => handleCheckboxClick('Not in the Least')} selected={selectedOption === 1} />
            <Checkbox label={'Slightly'} onClick={() => handleCheckboxClick('Slightly')} selected={selectedOption ===  2} />
            <Checkbox label={'Moderately'} onClick={() => handleCheckboxClick('Moderately')} selected={selectedOption === 3} />
            <Checkbox label={'Very Much'} onClick={() => handleCheckboxClick('Very Much')} selected={selectedOption === 4} />
            <Checkbox label={'Extremely'} onClick={() => handleCheckboxClick('Extremely')} selected={selectedOption === 5} />
          </div>
          <Button width={'100%'} color={'var(--lightGreen)'} type={'submit'} >
            Next Question
          </Button>
        </form>
      </Card>{" "}
    </Layout>
  );
}
