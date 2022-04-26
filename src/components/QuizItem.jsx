import React, { useState } from 'react'
import { MdOutlineContentCopy } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
  addQuestions,
  addQuestionText,
  copyQuizzes,
  removeQuizzes,
} from '../store/quizSlice'
// import QuizModal from './QuizModal'
import QuizOptionCard from './QuizOptionCard'
// import selectData from '../data/selectData'

const QuizItem = ({ questionText, options, id, quiz }) => {
  const dispatch = useDispatch()
  const [questionTextValue, setQuestionTextValue] = useState(questionText)
  const quesionChangeHandler = () => {
    dispatch(addQuestions({ option: '', id }))
  }
  const removeQuizzesHandler = () => {
    dispatch(removeQuizzes({ id }))
  }
  const copyChangeHandler = (quesId, quesCopy) => {
    dispatch(copyQuizzes({ quesId, quesCopy }))
  }
  const questionTextChangeHandler = (e) => {
    setQuestionTextValue(e.target.value)
    dispatch(addQuestionText({ questionText: questionTextValue }))
  }
  return (
    <Container>
      <SectionTop>
        <input
          type='text'
          placeholder='Вопрос'
          value={questionTextValue}
          onChange={questionTextChangeHandler}
        />
        {/* <QuizModal /> */}
      </SectionTop>
      {options.map((op, i) => (
        <QuizOptionCard
          key={op.id}
          option={op.option}
          number={i}
          id={op.id}
          quiz={quiz}
          parentId={id}
        />
      ))}
      <SectionBottom>
        <input type='radio' className='radio-style' disabled />
        <button
          type='button'
          className='add-option'
          onClick={quesionChangeHandler}
        >
          Добавить вариант
        </button>
      </SectionBottom>
      <hr className='line' />
      <Footer>
        <div className='add-question-bottom-left'>
          <MdOutlineContentCopy
            fontSize='28px'
            color='#5f6368'
            title='Создать копию'
            onClick={() => copyChangeHandler(id, quiz)}
          />
          <RiDeleteBin6Line
            fontSize='28px'
            color='#5f6368'
            title='Удалить'
            onClick={removeQuizzesHandler}
          />
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
    width: 200px;
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
    border-bottom: 2px solid #ededee;
    color: black;
    height: 45px;
    padding: 10px;
    background-color: #f7f7fc;
    border-radius: 4px 4px 0px 0px;
  }
  & input:focus {
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
  .add-another-option {
    outline: none;
    border: none;
    background-color: white;
    color: rgb(26, 115, 232);
    height: 38px;
    width: 170px;
    margin-left: 8px;
    border-bottom: 1px solid white;
  }
  .add-another-option:hover {
    border-bottom: 1px solid #bdbdbd;
  }
  .add-option {
    outline: none;
    border: none;
    background-color: white;
    border-bottom: 1px solid white;
    height: 38px;
    width: 125px;
    margin-left: 15px;
  }
  .add-option:hover {
    border-bottom: 1px solid #bdbdbd;
  }
  .radio-style {
    width: 18px;
    height: 18px;
  }
`
export default QuizItem
