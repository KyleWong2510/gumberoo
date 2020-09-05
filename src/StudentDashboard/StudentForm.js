import React, { useState } from 'react'
import './StudentForm.scss'

function StudentForm(props) {
  // const [state, setState] = useState({});
  const [studentNameInput, setStudentNameInput] = useState('')


  return (
      <section className='student-form'>
        <select
          name='studentNameInput' 
          className='student-names-input' 
          onChange={setStudentNameInput}>
          <option>Select Your Name</option> 
          <option value='Bill'>Bill</option>
        </select>
        <button className='submit-name-button' type='submit' onClick={(e) => props.setStudentName(e, studentNameInput)}>Submit</button>
      </section>
    )

  
}

export default StudentForm