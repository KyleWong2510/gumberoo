import React, { useState } from 'react'
import './MoodForm.scss'
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
    const url = `https://gumberoo-backend.herokuapp.com/api/v1/students/${props.student.id}/`
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({lesson: props.lesson.id, score: roundedScore, mood: studentMoodInput})
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  
  return (
     <section className='ice-sheet'>
       <div className="icesheet2">
  <div className="shadow2"></div>
  <div className="edge2"></div>
</div>
<div className="container">
  <div className="water"></div>
  <div className="icesheet">
    <div className="shadow"></div>
    <div className="edge"></div>
  </div>

  <div className="bear">
    <div className="leg1 posit3">
      <div className="paw2"></div>
    </div>
    <div className="leg1 posit4">
      <div className="paw2"></div>
    </div>
    <div className="head">
      <div className="ears posi1"></div>
      <div className="ears posi2"></div>
      <div className="jaw">
        <div className="eyes pos1"></div>
        <div className="eyes pos2"></div>
        <div className="nose"></div>
      </div>
    </div>
    <div className="bearbody">
      <div className="leg posit1">
        <div className="paw1"></div>
      </div>
      <div className="leg posit2">
        <div className="paw1"></div>
      </div>
    </div>
  </div>
</div>
      {!isSubmitted && 
        <section className='students-mood-form'>
          <div className='mood-text'>
            <h3 className='finished-message'>Great job {props.student.first_name}!</h3>
              <h3 className='finished-message'>How do you feel?</h3>

          </div>
          <div className='mood-holder'>
          <textarea
            maxLength='100'
            className='student-mood-input' 
            data-testid='mood-input'
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

          </div>
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