import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: 'Новая форма',
  description: 'Описание',
  questions: JSON.parse(localStorage.getItem('quizzes')) || [],
}
const quizSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    addQuizValue(state, action) {
      state.title = action.payload.title
      state.description = action.payload.description
    },
    addQuizzes(state, action) {
      state.questions.push(action.payload)
    },
    removeQuizzes(state, action) {
      state.questions = state.questions.filter(
        (quiz) => quiz.id !== action.payload.id
      )
    },
    copyQuizzes(state, { payload }) {
      state.questions.push(payload)
    },
    addQuestions(state, action) {
      state.questions = state.questions.map((question) => {
        if (question.id === action.payload.id) {
          question.options = [
            ...question.options,
            {
              id: new Date().toLocaleString(),
              option: action.payload.option,
            },
          ]
        }
        return question
      })
    },
    removeQuestions(state, action) {
      const quiz = state.questions.find(
        (ques) => ques.id === action.payload.parentId
      )
      state.questions.forEach((ques) => {
        if (ques.id === action.payload.parentId) {
          ques.options = quiz.options.filter(
            (option) => option.id !== action.payload.id
          )
        }
      })
    },
  },
})

export const {
  addQuizValue,
  addQuizzes,
  addQuestions,
  removeQuizzes,
  removeQuestions,
  copyQuizzes,
} = quizSlice.actions
export default quizSlice.reducer
