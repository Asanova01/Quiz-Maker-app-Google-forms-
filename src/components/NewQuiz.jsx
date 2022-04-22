import React from 'react'
import { createGlobalStyle } from 'styled-components'
import NewQuizForm from './NewQuizForm'
import QuizHeader from './QuizHeader'

const NewQuiz = () => {
  return (
    <>
      <GlobalStyle />
      <QuizHeader />
      <NewQuizForm />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #ede7f6;
  }
  `

export default NewQuiz
