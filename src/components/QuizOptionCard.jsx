import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { BsXLg } from 'react-icons/bs'
import { addOptionText, removeQuestions } from '../store/quizSlice'

const QuizOptionCard = ({ option, id, parentId }) => {
  const [optionValue, setOptionState] = useState(option)
  const dispatch = useDispatch()
  const removeQuiestionHandler = () => {
    dispatch(removeQuestions({ id, parentId }))
  }
  const optionChangeHandler = (e) => {
    setOptionState(e.target.value)
    dispatch(addOptionText({ option: optionValue }))
  }
  return (
    <SectionCard key={id}>
      <input type='radio' className='radio-style' disabled />
      <input
        type='text'
        className='option-style'
        value={optionValue}
        onChange={optionChangeHandler}
      />
      <BsXLg fontSize='16px' color='#5f6368' onClick={removeQuiestionHandler} />
    </SectionCard>
  )
}

const SectionCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  .radio-style {
    width: 18px;
    height: 18px;
  }
  .option-style {
    border: none;
    outline: none;
    width: 580px;
    padding: 8px;
    margin: 0px 15px;
    border-bottom: 2px solid #f4f4f9;
  }
`
export default QuizOptionCard
