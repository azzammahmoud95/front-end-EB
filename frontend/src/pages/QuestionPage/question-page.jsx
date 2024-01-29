import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/layout";
import BackButton from "../../Components/BackButton/back-button";
import Card from "../../Components/Card/card";
import Button from "../../Components/Button/Button.js";
import Checkbox from "../../Components/Checkbox/Checkbox.js";
import './question-page.scss'
import { GetAllQuestions, PatchAnswer } from "../../Redux/Questions/Questions-actions.js";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader.js";

export default function QuestionPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState({  
    question:{},
    index: 0,
    selectedOption:null
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
    const updatedQuestions = localQuestions.map((question, index) => {
      if (index === currentQuestionIndex.index) {
        return {
          ...question,
          selectedOption: valueMap[label], // Add the selected option to the current question
        };
      }
      return question;
    });
  
    setSelectedOption(valueMap[label]);
    console.log(valueMap[label]);
  };
  const questions = useSelector((store) => store.questionsReducers.questionData.questions);
  const loading = useSelector((store) => store.questionsReducers.getQuestionLoading);
  useEffect(() => {
    // if(loading){
    //   console.log(loading)
    // }
    if(questions){
      const initializedQuestions = questions.map((question) => ({
        ...question,
        
        selectedOption: null,
      }));
     
      console.log("questions",questions);
      setLocalQuestions(initializedQuestions);


   console.log("localQuestions",localQuestions
   )
   setCurrentQuestionIndex({
    question: initializedQuestions[0],
    index: 0
  });
  console.log("localQuestions", localQuestions);
console.log(currentQuestionIndex)
    }
  },[questions,loading])
  
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
      dispatch(PatchAnswer({ answerData }));
      const updatedLocalQuestions = [...localQuestions];
      updatedLocalQuestions[currentQuestionIndex.index].selectedOption = selectedOption;
      setLocalQuestions(updatedLocalQuestions);

      setCurrentQuestionIndex({
        question: localQuestions[currentQuestionIndex.index + 1],
        index: currentQuestionIndex.index + 1,
        selectedOption: selectedOption // Add selectedOption to currentQuestionIndex
      });
      console.log('localqusetionssssss',localQuestions)
      setSelectedOption(null);
    } catch (error) {
      console.error('Error:', error);
    }

  };
  const handleBackButton = () => {
    setCurrentQuestionIndex({
      question: localQuestions[currentQuestionIndex.index - 1],
      index: currentQuestionIndex.index - 1,
      selectedOption: localQuestions[currentQuestionIndex.index - 1].selectedOption
    });
    setSelectedOption(localQuestions[currentQuestionIndex.index - 1].selectedOption)
    console.log("backbutton event",currentQuestionIndex)
  };
  return (
    <Layout>
    {loading ? (
      <Loader />
    ) : (
      <>
        <BackButton onClick={handleBackButton} />
        <Card
          question={currentQuestionIndex.question?.prompt || "No Questions"}
        >
          <form
            className="form-layout"
            action="POST"
            onSubmit={handleNextQuestion}
          >
            <div>
              <Checkbox
                label={"Not in the Least"}
                onClick={() => handleCheckboxClick("Not in the Least")}
                selected={selectedOption === 1}
              />
              <Checkbox
                label={"Slightly"}
                onClick={() => handleCheckboxClick("Slightly")}
                selected={selectedOption === 2}
              />
              <Checkbox
                label={"Moderately"}
                onClick={() => handleCheckboxClick("Moderately")}
                selected={selectedOption === 3}
              />
              <Checkbox
                label={"Very Much"}
                onClick={() => handleCheckboxClick("Very Much")}
                selected={selectedOption === 4}
              />
              <Checkbox
                label={"Extremely"}
                onClick={() => handleCheckboxClick("Extremely")}
                selected={selectedOption === 5}
              />
            </div>
            <Button width={"100%"} color={"var(--lightGreen)"} type={"submit"}>
              Next Question
            </Button>
          </form>
        </Card>
      </>
    )}
  </Layout>
  
  );
}
