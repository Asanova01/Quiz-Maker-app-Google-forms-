import { useState } from 'react'

const useInput = () => {
  const [title, setTitle] = useState('Новая форма')
  const [description, setDescription] = useState('')
  const [questionText, setQuestionText] = useState('')

  return {
    title,
    description,
    questionText,
    titleChange: (e) => setTitle(e.target.value),
    descriptionChange: (e) => setDescription(e.target.value),
    questionTextChange: (e) => setQuestionText(e.target.value),
  }
}

export default useInput
