import React from "react";
import { createGlobalStyle } from "styled-components";
import Question from "./Question";
import QuizHeader from "./QuizHeader";
const NewQuiz = () => {
  return (
    <>
      <GlobalStyle />
      <QuizHeader />
      <Question/>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background: #ede7f6;
  }
  `;

export default NewQuiz;
