import { configureStore } from '@reduxjs/toolkit'
import quizSlice from './quizSlice'

const store = configureStore({
  reducer: {
    quizzes: quizSlice,
  },
})
export default store
