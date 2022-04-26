import React from 'react'
import styled from 'styled-components'
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addQuizzes } from '../store/quizSlice'

const QuizSide = () => {
  const dispatch = useDispatch()
  const addQuizzesHandler = () => {
    dispatch(
      addQuizzes({
        id: new Date().toLocaleString(),
        questionText: '',
        questionType: 'radio',
        options: [{ id: new Date().toLocaleString(), option: '' }],
        answer: false,
        open: true,
        required: false,
      })
    )
  }
  return (
    <Container>
      <Block>
        <AiOutlinePlus
          fontSize='50px'
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
  height: 70px;
  width: 70px;
  border-radius: 50%;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
`

export default QuizSide
