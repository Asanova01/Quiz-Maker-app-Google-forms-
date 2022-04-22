import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { BsXLg } from 'react-icons/bs'
import { removeQuestions } from '../store/quizSlice'

const QuizOptionCard = ({ option, id, number, parentId, questionType }) => {
  const dispatch = useDispatch()
  const removeQuiestionHandler = () => {
    dispatch(removeQuestions({ id, parentId }))
  }
  return (
    <SectionBody key={id}>
      <input type={questionType} className='radio-style' disabled />
      <input
        type='text'
        className='option-style'
        defaultValue={`${option} ${number + 1}`}
      />
      <BsXLg fontSize='16px' color='#5f6368' onClick={removeQuiestionHandler} />
    </SectionBody>
  )
}

const SectionBody = styled.div`
  display: flex;
  justify-content: space-between;
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
    border-bottom: 2px solid #f4f4f9;
  }
`
export default QuizOptionCard
