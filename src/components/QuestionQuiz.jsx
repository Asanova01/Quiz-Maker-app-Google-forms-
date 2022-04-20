import React from 'react'
import styled from 'styled-components'
import { BiImageAlt } from 'react-icons/bi'
import { AiFillCaretDown } from 'react-icons/ai'
import { MdOutlineRadioButtonChecked } from 'react-icons/md'
// import QuizOption from './QuizOption'
// import QuizAddOption from './QuizAddOption'

const QuestionQuiz = () => {
  return (
    <Container>
      <Block>
        <div>
          <input type='text' className='question-desc' />
          <BiImageAlt fontSize='22px' color='#5f6368' />
          <div className='question-left'>
            <MdOutlineRadioButtonChecked fontSize='18px' color='#5f6368' />
            <p>Один из списка</p>
            <AiFillCaretDown fontSize='13px' color='#5f6368' />
          </div>
        </div>
        {/* <QuizOption />
        <QuizAddOption /> */}
      </Block>
    </Container>
  )
}

const Container = styled.div`
  margin: auto;
  width: 57%;
  padding: 10px;
`
const Block = styled.div`
  background-color: white;
  border-left: 4px solid #4285f4;
  border-radius: 4px;
  padding: 10px 10px;
  text-transform: capitalize;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .question-desc {
    font-size: 14px;
    width: 260px;
    border: none;
    outline: none;
    border-bottom: 2px solid #bdbdbd;
    color: black;
    height: 45px;
    padding: 10px;
    background-color: #f4f4f9;
    border-radius: 4px 4px 0px 0px;
  }
  .question-desc:focus {
    border-bottom: 2px solid rgb(107, 58, 183);
    transition: 0.9s;
  }
  .question-left {
    border: 1px solid #7b7c7e;
    width: 260px;
    height: 38px;
    padding: 10px;
    border-radius: 3px;
  }
  & p {
    font-size: 12px;
    margin-left: -90px;
  }
`
export default QuestionQuiz
