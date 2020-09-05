import React, { useState, useEffect} from 'react'
import StudentForm from './StudentForm'
import './StudentDashboard.scss'


function StudentDashboard() {
  // const [state, setState] = useState({});
  const [studentName, setStudentName] = useState('')


 return (
    <section className='student-body'>
      {!studentName && <StudentForm setStudentName={setStudentName}/>}
      {studentName && 
      <section className='student-dash'>
        <div className='reading'>
          Reading
        </div>
        <div className='question'>
          Question
        </div>
        <div className='animation'>
          Animation
        </div>
      </section>}
    </section>
    )
}
  

export default StudentDashboard