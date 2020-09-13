import React, { useState } from "react";
import "./TeacherLessons.scss";
import LessonCard from "./LessonCard/LessonCard";
import { connect } from "react-redux";
import Modal from '../Modal/Modal'
import LessonDetails from "../LessonDetails/LessonDetails"
// import { setLessons } from "../actions";
// import { bindActionCreators } from "redux";

const TeacherLessons = ({ students, lessons }) => {
  const [foundLesson, setFoundLesson] = useState({})
  const [isViewingLessonDetails, toggleLessonDetails] = useState(false)

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

  // eslint-disable-next-line
  let lessonCard;
  return (
    <main className="teacher-lessons">
      <h1>Lessons</h1>
      {lessons.length ? (
        (lessonCard = lessons.map((lesson) => {
          return (
            <LessonCard
              id={lesson.id}
              key={lesson.id}
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

export default connect(mapStateToProps)(TeacherLessons);
