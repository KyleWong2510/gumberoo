import React, { useState } from 'react'
import './MoodForm.scss'
// import { Link, withRouter } from 'react-router-dom'
import { setStudent, setLesson } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


function MoodForm(props) {

  const [studentMoodInput, setStudentMoodInput] = useState('')
  
  let [isSubmitted, setIsSumbitted] = useState(false)
  
  const score = (props.score / props.lesson.questions.length)
  
  const roundedScore = Math.round(score*100)

  const postScore = () => {
    setIsSumbitted(true)
    const url = `https://gumberoo-backend.herokuapp.com/api/v1/lessons/${props.student.id}`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({lesson: props.lesson.id, score: roundedScore, mood: studentMoodInput})
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  
  return (
     <section className='student-form'>
      {!isSubmitted && 
        <section className='students-mood-form'>
          
         <h3 className='finished-message'>Great job {props.student.first_name}!</h3>
          <br></br>
          <h3 className='finished-message'>How do you feel?</h3>
          <textarea
            maxLength='100'
            className='student-mood-input' 
            placeholder='Type here how you feel, or just hit submit'
            onChange={e => setStudentMoodInput(e.target.value)}>
          </textarea>
          <button 
            className='submit-mood-button' 
            aria-label='submit mood' 
            type='submit'
            onClick={() => postScore()}
          >
            Submit
          </button>
        </section>
    }
      {isSubmitted && 
        <section className='students-mood-form'>
          <h3>Return to your teacher!</h3>
        </section>
    }
      </section>
  )
}

MoodForm.propTypes = {
  lesson: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
  setLesson: PropTypes.func.isRequired,
  setStudent: PropTypes.func.isRequired,
  student: PropTypes.object,
  studentId: PropTypes.string,
  students: PropTypes.array.isRequired,
}


const mapStateToProps = ({ setLesson, setStudents,  setStudent, setScore, setStudentId }) => ({
  student: setStudent,
  lesson: setLesson,
  students: setStudents,
  score: setScore,
  studentId: setStudentId
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setStudent, setLesson }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(MoodForm)