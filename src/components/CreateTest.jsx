import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import QuizTests from './QuizTests'

const CreateTest = () => {
  const tests = useSelector((state) => state.quizzes.tests)
  return (
    <Container>
      {tests.map((test) => (
        <QuizTests
          key={test.id}
          title={test.title}
          description={test.description}
          questions={test.questions}
        />
      ))}
    </Container>
  )
}

const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 800px;
`
export default CreateTest
