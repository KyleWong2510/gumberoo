import React, { useState, useEffect } from "react";
import "./TeacherLessons.scss";
import LessonCard from "./LessonCard/LessonCard";
import { connect } from "react-redux";
import Modal from "../Modal/Modal";
import LessonDetails from "../LessonDetails/LessonDetails";
import { getLessonAverage } from "../thunks/getLessonAverage";
import { bindActionCreators } from "redux";
import { resetStudentsResults } from '../actions'
import PropTypes from 'prop-types'

const TeacherLessons = ({ lessons, getLessonAverage, average }) => {
  const [foundLesson, setFoundLesson] = useState({});
  const [isViewingLessonDetails, toggleLessonDetails] = useState(false);

  useEffect (() => {
    resetStudentsResults()
  })

  const findLesson = (e) => {
    e.preventDefault();
    const foundTheLesson = lessons.find(
      (lesson) => +e.target.parentNode.id === lesson.id
    );
    getLessonAverage(e.target.parentNode.id);
    setFoundLesson(foundTheLesson);
    toggleLessonDetails(true);
  };

  const renderLessonDetailsModal = () => {
    if (isViewingLessonDetails) {
      return (
        <Modal
          content={
            <LessonDetails
              lesson={foundLesson}
              lessonLink={foundLesson}
              lessonAverage={average}
            />
          }
          toggleDisplay={() => toggleLessonDetails(false)}
        />
      );
    }
  };

  return (
    <main className="teacher-lessons">
      <h1>Lessons</h1>
      {lessons.length ? (
        lessons.map((lesson) => {
          return (
            <LessonCard
              key={lesson.id}
              id={lesson.id}
              lessonTitle={lesson.name}
              findLesson={findLesson}
            />
          );
        })
      ) : (
        <p className="no-lessons-message">
          Please click on the "Create a Lesson" Tab to create a lesson.
        </p>
      )}
      {renderLessonDetailsModal()}
    </main>
  );
};

const mapStateToProps = ({ setLessons, setLessonAverage }) => ({
  lessons: setLessons,
  average: setLessonAverage,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getLessonAverage,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TeacherLessons);

TeacherLessons.propTypes = {
  lessons: PropTypes.array.isRequired,
  getLessonAverage: PropTypes.func.isRequired,
};
