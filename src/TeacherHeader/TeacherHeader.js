import React from 'react'
import './TeacherHeader.scss'

const TeacherHeader = () => {
  return (
    <header className='teacher-header'>
      <h1 className='header-title'>Gumbaroo</h1>
      <section className='header-btn-container'>
        <button className='header-btn'>Students</button>
        <button className='header-btn'>Lessons</button>
      </section>
    </header>
  )
}

export default TeacherHeader