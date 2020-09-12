import React from 'react'
import './TeacherHeader.scss'
import { Link } from 'react-router-dom'

const TeacherHeader = () => {
  return (
    <header className='teacher-header'>
      <Link to='/'>
      <h1 className='header-title'>gumberoo</h1>
      </Link>
      <section className='header-btn-container'>
        <Link to='students' className='header-btn'>
          Students
        </Link>
        <Link to='lessons' className='header-btn'>
          Lessons
        </Link>
        <Link to='/createlesson' className='header-btn'>
          Create a Lesson
        </Link>
      </section>
    </header>
  )
}

export default TeacherHeader