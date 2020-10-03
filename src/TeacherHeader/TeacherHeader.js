import React from 'react'
import './TeacherHeader.scss'
import { NavLink } from 'react-router-dom'

const TeacherHeader = () => {
  return (
    <header className='teacher-header'>
      <NavLink to='/' 
        className='main-nav' 
        activeClassName='main-nav-active' 
        style={{ textDecoration: 'none' }}>
      <h1 className='header-title'><img src='https://i.postimg.cc/Z5JQX5Tw/Screen-Shot-2020-10-03-at-10-40-36-AM.png' alt='logo' className='logo-img'></img>gumberoo</h1>
      </NavLink>
      <section className='header-btn-container'>
        <NavLink 
          to='students' 
          className='header-btn'
          activeClassName='header-btn-active'>
          Students
        </NavLink>
        <NavLink 
          to='lessons' 
          className='header-btn'
          activeClassName='header-btn-active'>
          Assessments
        </NavLink>
        <NavLink 
          to='/createlesson' 
          className='header-btn'
          activeClassName='header-btn-active'>
          Create an Assessment
        </NavLink>
      </section>
    </header>
  )
}

export default TeacherHeader