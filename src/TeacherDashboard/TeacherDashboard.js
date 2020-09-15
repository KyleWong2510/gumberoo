import React, { useEffect } from 'react'
import './TeacherDashboard.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getLessons } from "../thunks/getLessons";
import { getStudents } from "../thunks/getStudents"
import { getTeacher } from "../thunks/getTeacher"
import PropTypes from 'prop-types'

const TeacherDashboard = ({ getTeacher, getStudents, getLessons, teacher, isLoading }) => {

  useEffect (() => {
    async function fetchData() {
      await getTeacher()
      await getStudents()
      await getLessons()
    } 
    fetchData()
    // eslint-disable-next-line 
  }, [])

  return (
    <section className="teacherDashBoard">
    {isLoading && <p>Loading</p>}
    {!isLoading && 
      <div className='welcome-letter'>
        <h1 className='welcome-message'>{`Welcome ${teacher.first_name},`} </h1>
        <p className='app-bio'>
          <span className='bio-title'>gumberoo</span> is an app aimed to help elementary educators create assessments inclusive to all students. 
          These assessments are easy for young students to access via a simple link generation that teachers can drop in their virtual classrooms.
          Based on the results of the assessment, the teacher will be able to review results to see how well a student was able to digest that topic.
          The assessments come in a colorblind friendly palette designed by the esteemed creative director of the Broad Institute at MIT, Bang Wong.
          Assessments are written in the OpenDyslexia font, and are completely mobility and disability friendly. Included as well, are an animations with
          reassuring sentiments being said to help anxious students. Thank you for choosing us to be your companion in the classroom.
          <br></br>
        </p>
          <span className='the-gumbaroo-team'>- The <span className='bio-title'>gumberoo</span> team</span>  
      </div>}
    </section>
    )
  }
  {/* <div className="jokeWrapper">
    <h4>Joke of the day!</h4>
    <h3>What did the ocean say to the Pirate?</h3>
    <h3>Nothing, it just waved!</h3>
  </div> */}
  
  const mapStateToProps = ({ setStudents, setLessons, setTeacher, isLoading }) => ({
 students: setStudents,
 lessons: setLessons,
 teacher: setTeacher,
 isLoading: isLoading
})

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(
    {
      getLessons, 
      getStudents,
      getTeacher
      // getScores 
    },
    dispatch
  )


export default connect(mapStateToProps, mapDispatchToProps)(TeacherDashboard);

TeacherDashboard.propTypes = {
  getTeacher: PropTypes.func.isRequired,
  getStudents: PropTypes.func.isRequired,
  getLessons: PropTypes.func.isRequired
}