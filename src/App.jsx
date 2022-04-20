import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NewQuiz from './components/NewQuiz'
// import Question from './components/QuizNewForm'
import CreateQuiz from './pages/CreateQuiz'
import WelcomePage from './pages/WelcomePage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='forms' element={<CreateQuiz />} />
      <Route path='forms/new-forms' element={<NewQuiz />}>
        {/* <Route path='question' element={<Question />} /> */}
      </Route>
    </Routes>
  )
}

export default App
