import React from 'react'
import styled from 'styled-components'
import { BsPlusCircle } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addQuizzes } from '../store/quizSlice'

const QuizSide = () => {
  const dispatch = useDispatch()
  const addQuizzesHandler = () => {
    dispatch(
      addQuizzes({
        id: new Date().toLocaleString(),
        questionText: 'Вопрос',
        questionType: 'radio',
        options: [{ id: Date.now(), option: 'Вариант' }],
        answer: false,
        open: true,
        required: false,
      })
    )
  }
  return (
    <Container>
      <Block>
        <BsPlusCircle
          fontSize='25px'
          color='#606264'
          onClick={addQuizzesHandler}
          title='Добавить вопрос'
        />
      </Block>
    </Container>
  )
}
const Container = styled.div`
  position: fixed;
  top: 170px;
  right: 200px;
`
const Block = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 50px;
  width: 50px;
  border-radius: 5px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
`

export default QuizSide
