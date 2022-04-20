import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineApps } from 'react-icons/md'
import { BiUserCircle } from 'react-icons/bi'
import Tamplete from '../components/Tamplete'

const CreateQuiz = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Block>
          <AiOutlineMenu color='#5f6368' />
          <img
            src='https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png'
            alt=''
          />
          <p>Формы</p>
        </Block>
        <div className='header-search'>
          <AiOutlineSearch color='#5f6368' />
          <input type='text' placeholder='Поиск' />
        </div>
        <div className='header-right'>
          <MdOutlineApps fontSize='22px' color='#5f6368' />
          <BiUserCircle fontSize='28px' color='#5f6368' />
        </div>
      </Header>
      <Tamplete />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #f4f4f9;
  }
`
const Header = styled.div`
  position: sticky;
  margin: 0;
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  p {
    color: #5f6368;
  }
  .header-right {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80px;
  }
  .header-search {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #f4f4f9;
    width: 600px;
    height: 45px;
    border-radius: 5px;
    padding: 15px;
  }
  .header-search > input {
    border: none;
    height: 40px;
    background: transparent;
    outline: none;
    width: 100%;
    padding: 10px;
  }
`
const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 140px;
`
export default CreateQuiz
