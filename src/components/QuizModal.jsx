import React from 'react'
import styled from 'styled-components'
import {
  MdOutlineRadioButtonChecked,
  MdDriveFileRenameOutline,
} from 'react-icons/md'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { RiCalendarEventLine } from 'react-icons/ri'
import { BsJustifyLeft, BsCheckSquareFill } from 'react-icons/bs'

const QuizModal = () => {
  return (
    <Container>
      <Block>
        <Column>
          <MdDriveFileRenameOutline fontSize='18px' color='#5f6368' />
          <p>Имя</p>
        </Column>
        <Column>
          <AiOutlineMail fontSize='18px' color='#5f6368' />
          <p>Почта</p>
        </Column>
        <Column>
          <BsJustifyLeft fontSize='18px' color='#5f6368' />
          <p>Текст (строка)</p>
        </Column>
        <Column>
          <MdOutlineRadioButtonChecked fontSize='18px' color='#5f6368' />
          <p>Один из списка</p>
        </Column>
        <Column>
          <BsCheckSquareFill fontSize='18px' color='#5f6368' />
          <p>Несколько из списка</p>
        </Column>
        <Column>
          <RiCalendarEventLine fontSize='18px' color='#5f6368' />
          <p>Дата</p>
        </Column>
        <Column>
          <BiTimeFive fontSize='18px' color='#5f6368' />
          <p>Время</p>
        </Column>
      </Block>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 40px;
  right: 260px;
`
const Block = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
  border-radius: 5px 5px 0px 0px;
  height: 360px;
  width: 240px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
`
const Column = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid grey;
  cursor: pointer;

  &:hover {
    background: #dadbfc;
    transition: 0.7s;
  }
  p {
    color: '#8f9091';
    padding: 15px;
    font-size: 12px;
  }
`
export default QuizModal
