import React from 'react'
import styled from 'styled-components'
import { BiFolder } from 'react-icons/bi'
import { MdOutlinePalette } from 'react-icons/md'
import { BsEye, BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineStar, AiOutlineUser } from 'react-icons/ai'
import { FiCornerUpLeft, FiCornerUpRight } from 'react-icons/fi'
import Tabs from './CreateQuiz/QuizTabs'

const QuizHeader = () => {
  return (
    <Header>
      <Wrapper>
        <InnerLeft>
          <img
            src='https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png'
            alt=''
          />
          <input type='text' placeholder='Новая форма' />
          <BiFolder fontSize='20px' color='#5f6368' />
          <AiOutlineStar fontSize='20px' color='#5f6368' />
          <span>Все изменения сохранены на Диске</span>
        </InnerLeft>
        <InnerRight>
          <MdOutlinePalette fontSize='20px' color='#5f6368' />
          <BsEye fontSize='20px' color='#5f6368' />
          <FiCornerUpLeft fontSize='20px' color='#5f6368' />
          <FiCornerUpRight fontSize='20px' color='#5f6368' />
          <button type='button'>Отправить</button>
          <BsThreeDotsVertical fontSize='20px' color='#5f6368' />
          <AiOutlineUser fontSize='20px' color='#5f6368' />
        </InnerRight>
      </Wrapper>
      <Tabs />
    </Header>
  )
}

const Header = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px 15px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const InnerLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 390px;
  & img {
    width: 40px;
  }
  & span {
    font-size: 11px;
    color: #444446;
  }
  & input {
    border: none;
    outline: none;
    font-size: 15px;
    line-height: 24px;
    color: #2f2f31;
    width: 110px;
  }
  input:focus {
    border-bottom: 2px solid #673ab7;
  }
`
const InnerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 370px;
  & button {
    background-color: #673ab7;
    outline: none;
    border: none;
    width: 110px;
    height: 34px;
    color: white;
    border-radius: 5px;
    font-size: 14px;
  }
`
export default QuizHeader
