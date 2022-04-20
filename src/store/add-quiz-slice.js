import { createSlice } from '@reduxjs/toolkit'

const addQuizSlice = createSlice({
  name: 'quizzes',
  initialState: [
    {
      id: Math.random().toString(),
      title: 'Новая форма',
      description: 'Описание',
      questionText: 'Вопрос ',
      options: [{ id: 1, option: 'Вариант 1' }],
      open: true,
      required: false,
    },
  ],
  reducers: {
    addQuizzes(state, action) {
      state.push(action.payload)
    },
    openQuiz(state) {
        state.open = !state.open
    },
    removeQuizzes(state, action) {
         state.filter((quiz)=>quiz.id !== action.payload)
      console.log(action.payload);
    },
    addOptions(state, action){
      state.options.push(action.payload)
    }
  },
}) 

export const {addQuizzes, removeQuizzes, addOptions} = addQuizSlice.actions
export default addQuizSlice.reducer
