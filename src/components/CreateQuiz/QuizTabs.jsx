import React from 'react'
// import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Tabs = () => {
  return (
    <Container>
      {/* <Outlet /> */}
      <div className='block-tabs'>
        {/* <NavLink
            to="question"
            className={({ isActive }) => (isActive ? "" : "active-link")}
          > */}
        <p>Вопросы</p>
        {/* </NavLink>
          <NavLink
            to="answer"
            className={({ isActive }) => (isActive ? "" : "active-link")}
          > */}
        <p>Ответы</p>
        {/* </NavLink> */}
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
