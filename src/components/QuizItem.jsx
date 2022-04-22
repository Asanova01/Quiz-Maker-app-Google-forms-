import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdOutlineContentCopy } from 'react-icons/md'
import { RiDeleteBin6Line, RiCheckboxCircleFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addQuestions, copyQuizzes, removeQuizzes } from '../store/quizSlice'
import QuizOptionCard from './QuizOptionCard'

const QuizItem = ({ questionText, options, quiz, id, questionType }) => {
  const dispatch = useDispatch()
  const quesionChangeHandler = () => {
    dispatch(addQuestions({ option: 'Вариант', id }))
  }
  const removeQuizzesHandler = () => {
    dispatch(removeQuizzes({ id }))
  }
  const copyChangeHandler = () => {
    const copyQuiz = {
      ...quiz,
      id: new Date().toLocaleString(),
    }
    dispatch(copyQuizzes(copyQuiz))
  }
  const [state, setState] = useState('')
  return (
    <Container>
      <SectionTop>
        <input type='text' placeholder='Вопрос' defaultValue={questionText} />
        <select
          onChange={(e) => {
            const selectedQuiz = e.target.value
            setState(selectedQuiz)
          }}
        >
          <option id='text' type='text'>
            Текст (строка)
          </option>
          <option id='radio' type='radio'>
            Один из списка
          </option>
          <option id='checkbox' type='checkbox'>
            Несколько из списка
          </option>
        </select>
        {state}
      </SectionTop>
      {options.map((op, i) => (
        <QuizOptionCard
          key={op.id}
          option={op.option}
          number={i}
          id={op.id}
          parentId={id}
          questionType={questionType}
        />
      ))}
      <SectionBottom>
        <input type='radio' className='radio-style' disabled />
        <button
          type='button'
          className='add-option-style'
          onClick={quesionChangeHandler}
        >
          Добавить вариант
        </button>
        <p>или</p>
        <button type='button'>Добавить вариант Другое</button>
      </SectionBottom>
      <hr className='line' />
      <Footer>
        <div className='add-question-bottom-left'>
          <MdOutlineContentCopy
            fontSize='20px'
            color='#5f6368'
            onClick={copyChangeHandler}
          />
          <div>
            <RiDeleteBin6Line
              fontSize='20px'
              color='#5f6368'
              onClick={removeQuizzesHandler}
            />
          </div>
          <p>Обязательный вопрос</p>
          <RiCheckboxCircleFill fontSize='20px' color='#5f6368' />
          <BsThreeDotsVertical fontSize='20px' color='#5f6368' />
        </div>
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 10px;
  background-color: white;
  border-left: 5px solid #4285f4;
  border-radius: 4px;
  padding: 10px 15px;
  text-transform: capitalize;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
  select {
    border: 1px solid #7b7c7e;
    width: 300px;
    height: 38px;
    padding: 10px;
    border-radius: 3px;
    outline: none;
  }
  .line {
    border-bottom: 1px solid #f4f4f9;
    margin-top: 25px;
  }
`
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  .add-question-bottom-left {
    display: flex;
    justify-content: space-around;
    width: 350px;
  }
`
const SectionTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & input {
    font-size: 14px;
    width: 300px;
    border: none;
    outline: none;
    border-bottom: 2px solid #bdbdbd;
    color: black;
    height: 45px;
    padding: 10px;
    background-color: #f7f7fc;
    border-radius: 4px 4px 0px 0px;
  }
  & input:hover {
    border-bottom: 2px solid rgb(107, 58, 183);
    transition: 0.9s;
  }
  & input:focus {
    background-color: #e6e6ee;
  }
`
const SectionBottom = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  & p {
    font-size: 13px;
    margin-left: 5px;
  }
  & button {
    outline: none;
    border: none;
    background-color: white;
    color: #1a73e8;
    height: 40px;
    width: 180px;
    border-radius: 5px;
  }
  button:hover {
    background-color: #f4f4f9;
  }
  .add-option-style {
    outline: none;
    border: none;
    border-bottom: 1px solid white;
    width: 115px;
    margin-left: 9px;
  }
  .add-option-style:hover {
    border-bottom: 1px solid #bdbdbd;
  }
  .radio-style {
    width: 18px;
    height: 18px;
  }
`
export default QuizItem
