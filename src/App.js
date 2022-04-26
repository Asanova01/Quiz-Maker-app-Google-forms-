import React from 'react'
import { Route, Routes } from 'react-router-dom'
import QuizHeader from './components/QuizHeader'
import CreateTest from './components/CreateTest'
import NewQuizForm from './components/NewQuizForm'
import CreateQuiz from './pages/CreateQuiz'
import WelcomePage from './pages/WelcomePage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='forms' element={<CreateQuiz />} />
      <Route path='forms/new-forms' element={<QuizHeader />}>
        <Route path='questions' element={<NewQuizForm />} />
        <Route path='tests' element={<CreateTest />} />
      </Route>
    </Routes>
  )
}

export default App
