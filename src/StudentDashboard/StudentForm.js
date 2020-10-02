import React, { useState } from 'react'
import './StudentForm.scss'
import { getStudents } from '../thunks/getStudents'
import { getLesson } from '../thunks/getLesson'
import { setStudent, setLesson, setStudentId } from '../actions/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function StudentForm(props) {

  const [studentNameInput, setStudentNameInput] = useState('')

  const students = props.students.map((student, i)=> {
    return (
      <option value={student.id} key={i++}>{`${student.first_name} ${student.last_name}`}</option>
    )
  })
  var limit = document.getElementById('limit')
if(limit && document.getElementsByClassName('eye-left-eye')){  
    var face  = document.getElementById('face'),
    nose  = document.getElementById('nose'),
    ears  = document.querySelectorAll('.ear');
  var mouse = {x:0, y:0},
    center = {
        x: window.innerWidth/2, 
        y: window.innerHeight/2
    },
    limit = {
        left: - (limit.offsetWidth  - face.offsetWidth)  / 2,
        right:  (limit.offsetWidth  - face.offsetWidth)  / 2,
        top:  - (limit.offsetHeight - face.offsetHeight) / 2,
        bottom: (limit.offsetHeight - face.offsetHeight) / 2,
    },
    eyeSize = 20,
    eyeSizeRate = 12,
    noseMoveRate = 2.5,
    earMoveRate = 3.5,
    faceMoveRate = 10;

function translate (selector, x, y) {
    selector.style.transform = 
        'translate(' + x + 'px,' + y + 'px)';
}

function interact (e) {
    mouse.x = e.touches ? e.touches[0].clientX : e.clientX;
    mouse.y = e.touches ? e.touches[0].clientY : e.clientY;
    
    var dx = (mouse.x - center.x)/faceMoveRate,
        dy = (mouse.y - center.y)/faceMoveRate,
        classX = dx < 0 ? 'left' : 'right';
    
    dx = dx < limit.left ? limit.left :
         dx > limit.right ? limit.right : dx;
    
    dy = dy < limit.top ? limit.top :
         dy > limit.bottom ? limit.bottom : dy;
        
    var eye = document.getElementsByClassName('eye-'+classX+'-eye')[0],
        size = Math.round(eyeSize - Math.abs(dx)/eyeSizeRate),
        margin = Math.round((eyeSize - size)/2);
    if(eye) {

      eye.style.cssText = 'width:' + size + 'px; \
                           height:' + size + 'px; \
                           margin-left:' + margin +'px; \
                           margin-top: ' + margin +'px;'; 
    }
    
    // fish.style.cssText = 
    //     'left:' + mouse.x + 'px; \
    //      top:' + mouse.y + 'px;'

    translate(face, dx, dy);

    for (var i = 0; i < ears.length; i++) {
        translate(ears[i], -dx/earMoveRate, -dy/earMoveRate);
    }
    
    translate(nose, dx/noseMoveRate, dy/noseMoveRate);
}

document.addEventListener("mousemove", interact);
document.addEventListener("touchmove", interact);
document.addEventListener("resize", function () {
    center.x = document.innerWidth/2;
    center.y = document.innerHeight/2;
});}
  
  const setStudentValues = (e) => {
    let student = props.students.find(student => student.id === parseInt(studentNameInput))
    props.setStudentId(studentNameInput)
    props.setStudent(student)
  }
  return (
    <section className='parent-section'>
    {props.isLoading && <p>loading</p>}
    {!props.isLoading &&
      <section className='student-form'>
        <p className='welcome-text'>Please Select Your Name!</p>
        <select
          aria-label='select name'
          id='student-name-input'
          name='studentNameInput' 
          className='student-names-input' 
          onChange={e => setStudentNameInput(e.target.value)}
          data-testid='nameInput'
        >
          <option value={null}>Select Your Name</option>
          {students}
        </select>
        <button className='submit-name-button' aria-label=
        'submit name' type='submit' disabled={!studentNameInput} onClick={e => setStudentValues(e)}>Submit</button>
        </section>
        }
        <div className='parent-contain'>
        <section className='login-bear-container'>
          <div className='ears-container'>
            <div className='ear'></div>
            <div className='ear'></div>
          </div>
          <div id='limit'>
            <div id='face'>
              <div className='eyes-container'>
                <div className='eye-left-eye'></div>
                <div className='eye-right-eye'></div>
              </div>
                <div className='phiz-container'>
                  <div id='nose'>
                    <div className='dot'></div>
                  </div>
                    <div className='mouth'></div>
                </div>
            </div>
          </div>
        </section>
        </div>
      </section>
  )
}

StudentForm.propTypes = {
  getLesson: PropTypes.func.isRequired,
  getStudents: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  lesson: PropTypes.object.isRequired,
  lessonId: PropTypes.string.isRequired,
  setLesson: PropTypes.func.isRequired,
  setStudent: PropTypes.func.isRequired,
  setStudentId: PropTypes.func.isRequired,
  students: PropTypes.array.isRequired,
  teacherId: PropTypes.string.isRequired,
  hasErrored: PropTypes.string.isRequired
}

const mapStateToProps = ({ setLesson, setStudents, isLoading, hasErrored }) => ({
  lesson: setLesson,
  students: setStudents,
  isLoading: isLoading,
  hasErrored: hasErrored
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setStudent, setLesson, getLesson, getStudents, setStudentId }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm)