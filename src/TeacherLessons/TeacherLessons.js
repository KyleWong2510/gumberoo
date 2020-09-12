import React, { useState } from "react";
import "./TeacherLessons.scss";
import LessonCard from "./LessonCard/LessonCard";
import { connect } from "react-redux";
// import { setLessons } from "../actions";
// import { bindActionCreators } from "redux";

const TeacherLessons = ({ students, lessons }) => {
  // eslint-disable-next-line

  // Upon load of test Teacher:
  // a GET will occur to grab the existing lessons saved for a teacher.
  // whenever a new lesson is created - it is saved to the store and will
  // prompt a rerender on this page as we list out the lessons
  // Lesson Title <- clickable for stats on the lesson
  // Lesson Link

  // State of the lessons added from Redux? Or delete from store via redux
  // const deleteLesson = (e) => {
  //   //eslint-disable-next-line
  //   setLessons(lessons.filter(lesson => lesson.id != e.target.parentNode.id))
  // }

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
            />
          );
        }))
      ) : (
        <p className="no-lessons-message">
          Please click on the "Create a Lesson" Tab to create a lessson.
        </p>
      )}
      {/* <LessonCard deleteLesson={deleteLesson}/> */}
    </main>
  );
};

const mapStateToProps = ({ setStudents, setLessons }) => ({
  students: setStudents,
  lessons: setLessons,
});

export default connect(mapStateToProps)(TeacherLessons);
