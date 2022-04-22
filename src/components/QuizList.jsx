import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import QuizItem from './QuizItem'

const QuizList = () => {
  const quizzes = useSelector((state) => state.quizzes.questions)
  useEffect(() => {
    localStorage.setItem('trello', JSON.stringify(quizzes))
  }, [quizzes])
  return quizzes.map((quiz) => (
    <QuizItem
      key={quiz.id}
      questionText={quiz.questionText}
      questionType={quiz.questionType}
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
