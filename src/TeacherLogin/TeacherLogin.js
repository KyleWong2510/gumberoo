import React, { useState } from 'react'

const TeacherLogin = () => {
  const [ teacherInput, setTeacherName ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Gumberoo</h1>
      <input 
        type='text'
        value= { teacherInput }
        aria-label='enter teachers first and last name'
        placeholder='Teacher Name...'
        onChange={(e) => setTeacherName(e.target.value)}
      />
      <input
        type='submit'
        value='Submit'
      />
    </form>
  )
}

export default TeacherLogin