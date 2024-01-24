import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/layout";
import BackButton from "../../Components/BackButton/back-button";
import Card from "../../Components/Card/card";
import Button from "../../Components/Button/Button.js";
import Checkbox from "../../Components/Checkbox/Checkbox.js";
import './question-page.scss'
import { GetAllQuestions } from "../../Redux/Questions/Questions-actions.js";
import { useDispatch } from "react-redux";

export default function QuestionPage() {
  const [selectedOption, setSelectedOption] = useState(null);
// useEffect(() => {
//   useGetAllQuestions()
// },[])
const dispatch  = useDispatch();
useEffect(() => {
  dispatch(GetAllQuestions());
},[])


  const handleCheckboxClick = (label) => {
    // Handle the selected value here
    setSelectedOption(label);
    console.log("Checkbox clicked, selected:", label);
  };

  return (
    <Layout>
     
      <Card
        question={`How appealing is engaging in artistic activities like painting or sculpture?`}
      >
        
        <form className="form-layout">
          <div>
            <Checkbox label={'Not in the Least'}  onClick={() => handleCheckboxClick('Not in the Least')} selected={selectedOption === 'Not in the Least'} />
            <Checkbox label={'Slightly'} onClick={() => handleCheckboxClick('Slightly')} selected={selectedOption === 'Slightly'} />
            <Checkbox label={'Moderately'} onClick={() => handleCheckboxClick('Moderately')} selected={selectedOption === 'Moderately'} />
            <Checkbox label={'Very Much'} onClick={() => handleCheckboxClick('Very Much')} selected={selectedOption === 'Very Much'} />
            <Checkbox label={'Extremely'} onClick={() => handleCheckboxClick('Extremely')} selected={selectedOption === 'Extremely'} />
          </div>
          <Button width={'100%'} color={'var(--lightGreen)'}>
            Next Question
          </Button>
        </form>
      </Card>{" "}
    </Layout>
  );
}
