import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import QuizItem from './QuizItem'

const QuizList = () => {
  const quizzes = useSelector((state) => state.quizzes.questions)
  const quizs = useSelector((state) => state.quizzes)
  useEffect(() => {
    localStorage.setItem('quizzes', JSON.stringify(quizs))
  }, [quizs])

  return quizzes.map((quiz) => (
    <QuizItem
      key={quiz.id}
      questionText={quiz.questionText}
      id={quiz.id}
      answer={quiz.answer}
      open={quiz.open}
      required={quiz.required}
      options={quiz.options}
      quiz={quiz}
    />
  ))
}

export default QuizList
