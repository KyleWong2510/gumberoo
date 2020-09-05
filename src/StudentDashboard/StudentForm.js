import React, { useState } from 'react'
import './StudentForm.scss'
// import { setStudentName } from '../actions/index'
import { Link, withRouter } from 'react-router-dom'
import { setStudentName } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


function StudentForm(props) {
  // const [state, setState] = useState({});
  const [studentNameInput, setStudentNameInput] = useState('')


  return (
      <section className='student-form'>
        <h2>Gumberoo</h2>
        <select
          name='studentNameInput' 
          className='student-names-input' 
          onChange={e => setStudentNameInput(e.target.value)}
          data-testid='nameInput'
        >
          <option>Select Your Name</option> 
          <option value='Bill'>Bill</option>
        </select>
        <button className='submit-name-button' type='submit' onClick={() => props.setStudentName(studentNameInput)}>Submit</button>
      </section>
    )

  
}
const mapDispatchToProps = dispatch => (
  bindActionCreators({ setStudentName }, dispatch)
)

export default connect(null, mapDispatchToProps)(StudentForm)