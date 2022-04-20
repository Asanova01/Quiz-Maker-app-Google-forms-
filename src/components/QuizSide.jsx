import React from 'react'
import styled from 'styled-components'
// import { ImFontSize } from 'react-icons/im'
// import { BiImageAlt } from 'react-icons/bi'
import { AiOutlinePlusCircle } from 'react-icons/ai'
// import { MdOutlineViewAgenda } from 'react-icons/md'
// import { BsPlayBtn, BsFileEarmarkBreak } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addQuizzes } from '../store/add-quiz-slice'

const QuizSide = () => {
  const dispatch = useDispatch()
  const addQuizListHandler = () => {
    dispatch(addQuizzes({ id: Math.random().toString() }))
  }

  return (
    <Container>
      <Block>
        <AiOutlinePlusCircle
          fontSize='18px'
          color='#040607'
          onClick={addQuizListHandler}
        />
        {/* <BsFileEarmarkBreak fontSize='17px' color='#5f6368' />
        <ImFontSize fontSize='17px' color='#5f6368' />
        <BiImageAlt fontSize='18px' color='#5f6368' />
        <BsPlayBtn fontSize='17px' color='#5f6368' />
        <MdOutlineViewAgenda fontSize='18px' color='#5f6368' /> */}
      </Block>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  bottom: 180px;
  right: 220px;
`
const Block = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 50px;
  width: 38px;
  border-radius: 5px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
`

export default QuizSide
