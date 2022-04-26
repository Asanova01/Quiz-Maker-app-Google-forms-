/* eslint-disable react/jsx-curly-newline */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'
import { createTests } from '../store/quizSlice'

const setActive = ({ isActive }) => (isActive ? 'active-link' : 'inactive')

const QuizHeader = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { title, description, questions } = useSelector(
    (state) => state.quizzes
  )
  const handleSubmit = () => {
    dispatch(
      createTests({
        title,
        description,
        questions,
        id: Date.now().toString(),
      })
    )
    navigate('tests')
  }

  useEffect(() => {
    navigate('questions')
  }, [])

  return (
    <>
      <GlobalStyle />
      <Header>
        <Wrapper>
          <InnerLeft>
            <img
              src='https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png'
              alt=''
            />
            <input type='text' placeholder='Новая форма' />
          </InnerLeft>
          <InnerRight>
            <button type='button' onClick={handleSubmit}>
              Отправить
            </button>
            <FaUserCircle fontSize='25px' color='#5f6368' />
          </InnerRight>
        </Wrapper>
        <LinkStyle>
          <NavLink to='questions' className={setActive}>
            Вопросы
          </NavLink>
          <NavLink to='tests' className={setActive}>
            Тесты
          </NavLink>
        </LinkStyle>
      </Header>
      <Outlet />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #ede7f6;
  }
  `
const Header = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const InnerLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 170px;
  margin-left: 25px;
  & img {
    width: 40px;
  }
  & input {
    border: none;
    outline: none;
    font-size: 15px;
    line-height: 24px;
    color: #2f2f31;
    border-bottom: 2px solid white;
    padding: 2px;
    width: 100px;
  }
  input:focus {
    border-bottom: 2px solid #673ab7;
  }
`
const InnerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 250px;
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
const LinkStyle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: -10px;
`
export default QuizHeader
