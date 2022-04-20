import React from 'react'
import styled from 'styled-components'
import { BsCircle } from 'react-icons/bs'
import { BiImageAlt } from 'react-icons/bi'

const QuizOption = () => {
  return (
    <Block>
      <BsCircle fontSize='15px' color='#5f6368' />
      <input type='text' className='option-style' placeholder='Вариант 1' />
      <BiImageAlt fontSize='22px' color='#5f6368' />
    </Block>
  )
}

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  margin-top: 10px;
  .option-style {
    border: none;
    outline: none;
    width: 500px;
    border-bottom: 2px solid #f4f4f9;
  }
  .option-style:focus {
    border-bottom: 2px solid rgb(107, 58, 183);
    transition: 0.9s;
  }
`
export default QuizOption
