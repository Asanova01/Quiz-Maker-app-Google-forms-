import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addQuizDescription, addQuizTitle } from '../store/quizSlice'
import QuizList from './QuizList'
import QuizSide from './QuizSide'

const NewQuizForm = () => {
  const dispatch = useDispatch()
  const quizzes = useSelector((state) => state.quizzes)
  const titleChangeHandler = (e) => {
    dispatch(addQuizTitle({ title: e.target.value }))
  }
  const descriptionChangeHandler = (e) => {
    dispatch(addQuizDescription({ description: e.target.value }))
  }

  return (
    <Container>
      <br />
      <Wrapper>
        <Inner>
          <input
            type='text'
            placeholder='Новая форма'
            className='new-quiz-name'
            value={quizzes.title}
            onChange={titleChangeHandler}
          />
          <input
            type='text'
            placeholder='Описание'
            className='new-quiz-desc'
            onChange={descriptionChangeHandler}
            value={quizzes.description}
          />
        </Inner>
        <QuizList />
        <QuizSide />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  padding-bottom: 25px;
  .new-quiz-name {
    font-size: 28px;
    font-weight: 400;
    line-height: 40px;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 2px solid #f4f4f9;
    color: black;
    height: 35px;
  }
  .new-quiz-name:focus {
    border-bottom: 2px solid rgb(107, 58, 183);
    transition: 0.9s;
  }
  .new-quiz-desc:focus {
    border-bottom: 2px solid rgb(107, 58, 183);
    transition: 0.9s;
  }
  .new-quiz-desc {
    font-size: 13px;
    font-weight: 400;
    line-height: 40px;
    width: 100%;
    margin-top: 23px;
    border: none;
    outline: none;
    border-bottom: 2px solid #f4f4f9;
    color: black;
    height: 15px;
  }
`
const Wrapper = styled.div`
  margin: auto;
  width: 55%;
`
const Inner = styled.div`
  margin-top: 80px;
  background-color: white;
  border-top: 8px solid rgb(107, 58, 183);
  border-radius: 8px;
  padding: 20px 25px;
  height: 120px;
  text-transform: capitalize;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
`
export default NewQuizForm
