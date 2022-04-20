/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import { BsCircle } from 'react-icons/bs'

const QuizAddOption = () => {
  return (
    <Block>
      <BsCircle fontSize='15px' color='#5f6368' />
      <p>Добавить вариант</p>
      <p className='quiz-option-style'>или</p>
      <p className='add-option-p'>добавить вариант "Другое"</p>
    </Block>
  )
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  margin-top: 10px;
  width: 330px;
  .quiz-option-style {
    font-size: 12px;
    border-bottom: 1px solid white;
  }
  .quiz-option-style:hover {
    border-bottom: 1px solid #8b8b8b;
  }
  .add-option-p {
    color: #1a73e8;
    font-weight: bold;
  }
`
export default QuizAddOption
