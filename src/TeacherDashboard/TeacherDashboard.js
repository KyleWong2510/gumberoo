import React, { useState, useEffect } from 'react'
import './TeacherDashboard.scss'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getLessons } from "../thunks/getLessons";
import { getStudents } from "../thunks/getStudents"
import { getTeacher } from "../thunks/getTeacher"


const TeacherDashboard = (props) => {
  const [error, setError] = useState('')

  const getTeacherInformation = async () => {
    await props.getTeacher()
  }

  const getTeachersStudents = async () => {
    await props.getStudents
  }

  useEffect(() =>{
    try{
      getTeacherInformation()
    } catch(error) {
      setError(error)
    }
  }, [])

  return (
    <section className="teacherDashBoard">
      <h1>Welcome, Teacher</h1>
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

const mapStateToProps = ({ setStudents, setLessons, setTeacher }) => ({
 students: setStudents,
 lessons: setLessons,
 teacher: setTeacher
})

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(
    {
      getLessons, 
      getStudents,
      getTeacher
    },
    dispatch
  )


export default connect(mapStateToProps, mapDispatchToProps)(TeacherDashboard);