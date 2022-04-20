import { configureStore } from '@reduxjs/toolkit'
import addQuizSlice from './add-quiz-slice'

const store = configureStore({
  reducer: {
    quizzes: addQuizSlice,
  },
})
export default store
