import React, { useState } from 'react'
import './MoodForm.scss'
// import { Link, withRouter } from 'react-router-dom'
import { setStudent, setLesson } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { lesson } from '../mockData/mockData'



function MoodForm(props) {
  //eslint-disable-next-line
  const [studentMoodInput, setStudentMoodInput] = useState('')
  let [isSubmitted, setIsSumbitted] = useState(false)


  const postScore = () => {
    setIsSumbitted(true)
    const url = `https://cors-anywhere.herokuapp.com/https://gumberoo-backend.herokuapp.com/api/v1/lessons/${props.student.id}`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({lesson: props.lesson.id, score: props.score, mood: studentMoodInput})
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  
  return (
     <section className='student-form'>
      {!isSubmitted && 
        <section className='students-mood-form'>
          
         <h3 className='finished-message'>Great job {props.studentName}</h3>
          <br></br>
          <h4>How do you feel?</h4>
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

const mapStateToProps = ({ setLesson, setStudents,  setStudent, setScore }) => ({
  student: setStudent,
  lesson: setLesson,
  students: setStudents,
  score: setScore
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setStudent, setLesson }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(MoodForm)