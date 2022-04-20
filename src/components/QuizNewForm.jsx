import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { BiImageAlt } from 'react-icons/bi'
import { BsXLg, BsThreeDotsVertical } from 'react-icons/bs'
import { MdOutlineContentCopy } from 'react-icons/md'
import { RiDeleteBin6Line, RiCheckboxCircleFill } from 'react-icons/ri'
import QuizSide from './QuizSide'
import { removeQuizzes } from '../store/add-quiz-slice'

// import { MdOutlineRadioButtonChecked } from 'react-icons/md'

const QuizNewForm = () => {
  const quizzes = useSelector((state) => state.quizzes)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const removeHandler = () => {
    dispatch(removeQuizzes({ id: Math.random().toString() }))
    console.log(removeQuizzes)
  }

  const questionaUI = () => {
    return (
      <>
        {quizzes.map((quiz) => (
          <Accordion>
            {!open ? (
              <div key={quiz.id} id={quiz.id}>
                <div className='saved-questions'>
                  <h1 onClick={() => setOpen(true)}>{quiz.questionText}</h1>
                  <div>
                    <input type='checkbox' disabled />
                    <p>Вариант 1</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className='add-question-top'>
                  <input
                    type='text'
                    className='question-desc'
                    // value={ques.questionText}
                    placeholder='Вопрос'
                  />
                  <BiImageAlt fontSize='22px' color='#5f6368' />
                  <select>
                    <option value='text'>Текст (строка)</option>
                    <option value='checkbox'>Один из списка</option>
                    <option value='radio'>Несколько из списка</option>
                  </select>
                </div>
                <div className='add-question-body'>
                  <input type='text' className='checkbox-input' disabled />
                  <input
                    type='text'
                    className='text-input'
                    placeholder='option'
                  />
                  <BiImageAlt fontSize='22px' color='#5f6368' />
                  <BsXLg fontSize='16px' color='#5f6368' />
                </div>
                <div className='add-question-body-bottom'>
                  <input type='text' className='checkbox-input' disabled />
                  <input
                    type='text'
                    className='text-add-input'
                    placeholder='Добавить вариант'
                  />
                  <p>или</p>
                  <button type='button'>Добавить вариант Другое</button>
                </div>
                <hr className='line' />
                <Footer>
                  <div className='add-question-bottom-left'>
                    <MdOutlineContentCopy fontSize='20px' color='#5f6368' />
                    <RiDeleteBin6Line
                      fontSize='20px'
                      color='#5f6368'
                      id={quiz.id}
                    />
                    <button type='button' onClick={removeHandler} id={quiz.id}>
                      Click me
                    </button>
                    <p>Обязательный вопрос</p>
                    <RiCheckboxCircleFill fontSize='20px' color='#5f6368' />
                    <BsThreeDotsVertical fontSize='20px' color='#5f6368' />
                  </div>
                </Footer>
              </>
            )}

            <QuizSide />
          </Accordion>
        ))}
      </>
    )
  }
  return (
    <Section>
      <br />
      <Block>
        <div className='new-quiz-top'>
          <input
            type='text'
            placeholder='Новая форма'
            className='new-quiz-top-name'
          />
          <input
            type='text'
            placeholder='Описание'
            className='new-quiz-top-desc'
          />
        </div>
        {questionaUI()}
      </Block>
    </Section>
  )
}

const Section = styled.div`
  height: 100%;
  padding-bottom: 30px;
  .new-quiz-top {
    background-color: white;
    border-top: 8px solid rgb(107, 58, 183);
    border-radius: 8px;
    padding: 20px 25px;
    height: 120px;
    text-transform: capitalize;
    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
      0 1px 3px 0 rgb(0 0 0 / 12%);
  }
  .new-quiz-top-name {
    font-size: 28px;
    font-weight: 400;
    line-height: 40px;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 2px solid #f4f4f9;
    color: black;
    height: 35px;
  }
  .new-quiz-top-name:focus {
    border-bottom: 2px solid rgb(107, 58, 183);
    transition: 0.9s;
  }
  .new-quiz-top-desc:focus {
    border-bottom: 2px solid rgb(107, 58, 183);
    transition: 0.9s;
  }
  .new-quiz-top-desc {
    font-size: 13px;
    font-weight: 400;
    line-height: 40px;
    width: 100%;
    margin-top: 23px;
    border: none;
    outline: none;
    border-bottom: 2px solid #f4f4f9;
    color: black;
    height: 15px;
  }
`
const Block = styled.div`
  margin: auto;
  width: 55%;
`
const Accordion = styled.div`
  margin-top: 10px;
  background-color: white;
  border-left: 5px solid #4285f4;
  border-radius: 4px;
  padding: 10px 15px;
  text-transform: capitalize;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
  .add-question-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .question-desc {
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
  .question-desc:focus {
    border-bottom: 2px solid rgb(107, 58, 183);
    transition: 0.9s;
  }
  .question-desc:hover {
    background-color: #e6e6ee;
  }
  select {
    border: 1px solid #7b7c7e;
    width: 300px;
    height: 38px;
    padding: 10px;
    border-radius: 3px;
    outline: none;
  }
  .add-question-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
  }
  .text-input {
    border: none;
    outline: none;
    width: 580px;
    padding: 8px;
    border-bottom: 2px solid #f4f4f9;
  }
  .text-input:focus {
    border-bottom: 2px solid rgb(107, 58, 183);
    transition: 0.9s;
  }
  .checkbox-input {
    width: 18px;
    height: 18px;
  }
  .add-question-body-bottom {
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
  }
  .text-add-input {
    outline: none;
    border: none;
    border-bottom: 1px solid white;
    width: 115px;
    margin-left: 9px;
  }
  .text-add-input:hover {
    border-bottom: 1px solid #bdbdbd;
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
export default QuizNewForm
