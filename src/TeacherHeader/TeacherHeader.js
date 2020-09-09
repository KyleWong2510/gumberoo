import React from 'react'
import './TeacherHeader.scss'

const TeacherHeader = () => {
  return (
    <header className='teacher-header'>
      <h1 className='header-title'>gumberoo</h1>
      <section className='header-btn-container'>
        <button>Students</button>
        <button>Lessons</button>
        <button>Create a Lesson</button>
      </section>
    </header>
  )
}

export default TeacherHeader