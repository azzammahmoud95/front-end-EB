import React, { useState, useEffect } from "react";
import icon from "../../Assets/Images/logo.svg";
import "./layout.scss";
import TriangleStack from "../TriangleStack/TriangleStack";
import BackButton from "../BackButton/back-button";
import { useDispatch, useSelector } from "react-redux";
import { GetAllQuestions } from "../../Redux/Questions/Questions-actions";
import Loader from "../Loader/Loader";



export default function Layout({ children }) {
  const dispatch  = useDispatch();
  const [progressIndicator,setProgressIndicator ] = useState(0)
  useEffect(() => {
    dispatch(GetAllQuestions());
  }, []);

  const questionsAnswered = useSelector(
    (store) => store.questionsReducers.questionData.questions
  );
  
  useEffect(() => {
    if (questionsAnswered) {
      setProgressIndicator(100 - (questionsAnswered.length / 50) * 100);
      // console.log("progress", progress);
    }
  }, [questionsAnswered]);
// const progress = (questionsAnswered.length / 50) * 100;
// console.log("progress",progress);
  // const [columns, setColumns] = useState(3);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth > 1200) {
  //       setColumns(3);
  //     } else if (window.innerWidth > 768) {
  //       setColumns(2);
  //     } else {
  //       setColumns(1);
  //     }
  //   };// Initial setup
  //   handleResize();

  //   // Add event listener for window resize
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <div style={{height:'100vh',overflowY:'scroll'}}>
      <div className="Header-logo" >
        <img src={icon} alt="icon-logo" width={40} height={40} />
      </div>

      <div className="flex-layout" >
        {/* <div className="question-child" > */}
          { children}
        {/* </div> */}

        {/* <ProgressBar progress={progressIndicator} /> */}

        <div className="animation-sidebar" >
        <div
  className="triangle-stack-container"
  style={{
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(100px, 1fr))`,
    justifyItems: 'center',
    // gap: "50px",
  }}
>
                   <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />
          <TriangleStack />

          </div>
          </div>
      </div>
    </div>
  );
}
