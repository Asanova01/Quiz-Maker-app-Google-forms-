import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { AiOutlineMenu } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

const WelcomePage = () => {
  const navigate = useNavigate()
  return (
    <>
      <GlobalStyle />
      <Header>
        <FcGoogle fontSize='28px' />
        <AiOutlineMenu color='#5f6368' fontSize='28px' />
      </Header>
      <Title>Создавайте информативные документы</Title>
      <Section>
        <p className='welcome-page-desc'>Для личных целей</p>
        <img src='https://www.google.com/images/about/docs-icon.svg' alt='' />
        <p className='welcome-page-text'>
          Благодаря Google Документам вы можете создавать файлы, редактировать
          их и работать над ними вместе с другими пользователями где и когда
          угодно - совершенно бесплатно.
        </p>
        <button
          type='button'
          onClick={() => {
            navigate('forms')
          }}
        >
          Открыть Google Документы
        </button>
      </Section>
    </>
  )
}
const GlobalStyle = createGlobalStyle`
  body{
  background-image: url('https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  }
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  color: grey;
  background-color: white;
  padding: 35px;
`
const Section = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  width: 390px;
  height: 390px;
  border-radius: 10px;
  background-color: rgb(241, 239, 239);
  & button {
    background: #4386fc;
    border: none;
    color: #fff;
    font-size: 18px;
    height: 50px;
    margin-top: 20px;
    cursor: pointer;
    width: 270px;
  }
  .welcome-page-text {
    color: rgb(46, 46, 46);
    width: 350px;
    line-height: 30px;
    margin-top: 20px;
    font-size: 18px;
  }
  & img {
    width: 40px;
    margin-top: 20px;
  }
  .welcome-page-desc {
    font-size: 28px;
    color: rgb(82, 82, 82);
    margin-top: 15px;
  }
`
const Title = styled.p`
  text-align: center;
  font-size: 35px;
  color: white;
  margin-top: 15px;
`
export default WelcomePage
