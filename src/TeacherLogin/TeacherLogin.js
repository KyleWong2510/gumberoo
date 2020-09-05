import React, { useState } from 'react'
import './TeacherLogin.scss'

const TeacherLogin = () => {
  const [ teacherInput, setTeacherName ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className='teacher-login' onSubmit={handleSubmit}>
      <h1>Gumberoo</h1>
      <input 
        className='teacher-input'
        type='text'
        value= { teacherInput }
        aria-label='enter teachers first and last name'
        placeholder='Teacher Name...'
        onChange={(e) => setTeacherName(e.target.value)}
      />
      <input
        className='submit-btn'
        type='submit'
        value='Submit'
      />
    </form>
  )
}

export default TeacherLogin