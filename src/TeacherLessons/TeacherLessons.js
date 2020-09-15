import React, { useState } from "react";
import "./TeacherLessons.scss";
import LessonCard from "./LessonCard/LessonCard";
import { connect } from "react-redux";
import Modal from '../Modal/Modal'
import LessonDetails from "../LessonDetails/LessonDetails"
import PropTypes from 'prop-types'
import { getLessonAverage } from "../thunks/getLessonAverage"
import { bindActionCreators } from "redux"

const TeacherLessons = ({ students, lessons, getLessonAverage, average }) => {
  const [foundLesson, setFoundLesson] = useState({})
  const [isViewingLessonDetails, toggleLessonDetails] = useState(false)

  const findLesson = async (e) => {
    e.preventDefault()
    const foundTheLesson = lessons.find(lesson => +e.target.parentNode.id === lesson.id)
    await getLessonAverage(e.target.parentNode.id)
    setFoundLesson(foundTheLesson)
    toggleLessonDetails(true)
  }

  const renderLessonDetailsModal = () => {
    if (isViewingLessonDetails) {
      return (
        <Modal 
          content={<LessonDetails 
            lesson={foundLesson} 
            lessonLink={foundLesson}
            lessonAverage={average}
           />}
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
    </main>
  );
};

const mapStateToProps = ({ setStudents, setLessons, setLessonAverage }) => ({
  students: setStudents,
  lessons: setLessons,
  average: setLessonAverage
});

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(
    {
      getLessonAverage
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(TeacherLessons);

TeacherLessons.propTypes = {
  lessons: PropTypes.array.isRequired,
  students: PropTypes.array.isRequired,
  getLessonAverage: PropTypes.func.isRequired
}