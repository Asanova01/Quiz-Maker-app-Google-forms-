/* eslint-disable no-unused-expressions */
import React from 'react'
import { createGlobalStyle } from 'styled-components'
// import { useSelector } from 'react-redux'
import Question from './QuizNewForm'
import QuizHeader from './QuizHeader'
// import QuizSide from './QuizSide'
// import QuestionUI from './QuestionQuiz'
// import QuizModal from './QuizModal'

const NewQuiz = () => {
  // const quize = useSelector((state) => {
  //   return state.quiz
  // })

  return (
    <>
      <GlobalStyle />
      <QuizHeader />
      <Question />
      {/* <QuizSide /> */}
      {/* <QuestionUI /> */}
      {/* <QuizModal /> */}
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #ede7f6;
  }
  `

export default NewQuiz
