import React from 'react'
import './TeacherLessons.scss'

const TeacherLessons = () => {

// Upon load of test Teacher:
// a GET will occur to grab the existing lessons saved for a teacher. 
// whenever a new lesson is created - it is saved to the store and will
// prompt a rerender on this page as we list out the lessons
// Lesson Title <- clickable for stats on the lesson
// Lesson Link



  return (
    <main className='teacher-lessons'>
      <h1>Lessons</h1>
      
    </main>
  )
}




export default TeacherLessons