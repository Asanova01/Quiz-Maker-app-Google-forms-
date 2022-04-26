import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('quizzes')) || {
  title: '',
  description: '',
  questions: [],
  tests: [],
}

const quizSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    addQuizTitle(state, action) {
      state.title = action.payload.title
    },
    addQuizDescription(state, action) {
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
    copyQuizzes(state, action) {
      const { quesId, quesCopy } = action.payload
      const quizIndex = state.questions.findIndex((ques) => ques.id === quesId)
      state.questions.splice(quizIndex + 1, 0, {
        ...quesCopy,
        id: new Date().toLocaleString(),
      })
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
    addQuestionText(state, action) {
      console.log(action.payload)
      state.questionText = action.payload.questionText
    },
    addOptionText(state, action) {
      state.option = action.payload.option
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
    createTests(state, action) {
      state.tests = state.tests.concat(action.payload)
    },
  },
})

export const {
  addQuizTitle,
  addQuizDescription,
  addQuizzes,
  addQuestions,
  removeQuizzes,
  removeQuestions,
  copyQuizzes,
  addAllQuizzes,
  addQuizzesTitle,
  createTests,
  addOptionText,
  addQuestionText,
} = quizSlice.actions
export default quizSlice.reducer
