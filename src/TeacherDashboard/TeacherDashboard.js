import React, { useState, useEffect } from 'react'
import './TeacherDashboard.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getLessons } from "../thunks/getLessons";
import { getStudents } from "../thunks/getStudents"
import { getTeacher } from "../thunks/getTeacher"
import { resetStudentsResults } from '../actions'
import PropTypes from 'prop-types'

const TeacherDashboard = ({ getTeacher, getStudents, getLessons, resetStudentsResults }) => {

  useEffect (() => {
    async function fetchData() {
      await getLessons()
      await getTeacher()
      await getStudents()
      await resetStudentsResults()
    } 
    
    fetchData()
    // eslint-disable-next-line 
  }, [])

  return (
    <section className="teacherDashBoard">
      <h1>Welcome Teacher </h1>
      <h3>gumberoo is an app aimed to help Teachers achieve a check of understanding from their students.  A teacher may create a lesson 
        based on topics taught, and the app will auto generate a link that may be shared for all students.  Based on the results of the 
        lesson, the teacher will be able to review results to see how well a student was able to digest that topic. 
      </h3>
    <div className="jokeWrapper">
      <h4>Joke of the day!</h4>
      <h3>What did the ocean say to the Pirate?</h3>
      <h3>Nothing, it just waved!</h3>
    </div>
    </section>
  )
}

const mapStateToProps = ({ setLessons }) => ({
  lessons: setLessons,
})

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(
    {
      getLessons, 
      getStudents,
      getTeacher,
      resetStudentsResults
    },
    dispatch
  )


export default connect(mapStateToProps, mapDispatchToProps)(TeacherDashboard);

TeacherDashboard.propTypes = {
  getTeacher: PropTypes.func.isRequired,
  getStudents: PropTypes.func.isRequired,
  getLessons: PropTypes.func.isRequired,
  resetStudentsResults: PropTypes.func.isRequired,
  lessons: PropTypes.array.isRequired
}