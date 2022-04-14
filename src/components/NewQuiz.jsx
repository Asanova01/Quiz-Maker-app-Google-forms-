import React from "react";
// import AddQuizForm from "./AddQuizForm";
import { createGlobalStyle } from "styled-components";
import QuizHeader from "./QuizHeader";
const NewQuiz = () => {
  return (
    <>
      <GlobalStyle />
      <QuizHeader/>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background: #ede7f6;
  }
  `;

export default NewQuiz;
