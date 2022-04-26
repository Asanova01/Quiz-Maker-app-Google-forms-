import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Tabs = () => {
  return (
    <Container>
      {/* <Outlet /> */}
      <div className='block-tabs'>
        <NavLink
          to='questions'
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Вопросы
        </NavLink>
        <NavLink
          to='tests'
          className={({ isActive }) => (isActive ? '' : 'active-link')}
        >
          Тесты
        </NavLink>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  .block-tabs {
    display: flex;
    justify-content: space-around;
    width: 200px;
  }
  /* .active-link {
    color: var(--color-active);
    cursor: pointer;
    text-decoration: none;
  } */
  p {
    font-size: 13px;
  }
`
export default Tabs
