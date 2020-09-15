import React, { useState, useEffect } from "react";
import "./TeacherLessons.scss";
import LessonCard from "./LessonCard/LessonCard";
import { connect } from "react-redux";
import Modal from '../Modal/Modal'
import LessonDetails from "../LessonDetails/LessonDetails"
// import { setLessons } from "../actions";
// import { bindActionCreators } from "redux";
import { resetStudentsResults } from '../actions'
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types'

const TeacherLessons = ({ students, lessons, resetStudentsResults }) => {
  const [foundLesson, setFoundLesson] = useState({})
  const [isViewingLessonDetails, toggleLessonDetails] = useState(false)

  useEffect (() => {
    resetStudentsResults()
  })

  const findLesson = (e) => {
    const foundTheLesson = lessons.find(lesson => +e.target.parentNode.id === lesson.id)
    setFoundLesson(foundTheLesson)
    toggleLessonDetails(true)
  }

  const renderLessonDetailsModal = () => {
    if (isViewingLessonDetails) {
      return (
        <Modal 
          content={<LessonDetails lesson={foundLesson}/>}
          toggleDisplay={() => toggleLessonDetails(false)}
        />
      )
    } 
  }
  
  return (
    <main className="teacher-lessons">
      <h1>Lessons</h1>
      {lessons.length ? (
        (lessons.map((lesson) => {
          return (
            <LessonCard
              key={lesson.id}
              id={lesson.id}
              lessonLink={lesson.link}
              lessonTitle={lesson.name}
              findLesson={findLesson}
            />
          );
        }))
      ) : (
        <p className="no-lessons-message">
          Please click on the "Create a Lesson" Tab to create a lesson.
        </p>
      )}
      {renderLessonDetailsModal()}
      {/* <LessonCard deleteLesson={deleteLesson}/> */}
    </main>
  );
};

const mapStateToProps = ({ setStudents, setLessons }) => ({
  students: setStudents,
  lessons: setLessons,
});

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(
    {
      resetStudentsResults
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(TeacherLessons);

TeacherLessons.propTypes = {
  lessons: PropTypes.array.isRequired,
  students: PropTypes.array.isRequired
}
