import React from "react";
import "./LessonPreview.scss";
import QuestionCard from "./QuestionCard/QuestionCard";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addLesson } from "../actions";

const LessonPreview = ({
  questions,
  setQuestions,
  lessonTitleText,
  setLessonTitleText,
  deleteQuestion,
  addLesson,
}) => {
  const teacherId = 1
  const isEnabled = lessonTitleText.trim() === '' || questions.length < 1

  const createLesson = (e) => {
    e.preventDefault();
    const lesson = {
      name: lessonTitleText,
      questions: questions,
    };
    postLesson(lesson)
    addLesson(lesson);
    clearLesson();
  };

  const postLesson = (lesson) => {
    const url = `https://gumberoo-backend.herokuapp.com/api/v1/teachers/${teacherId}/lessons/`
    return fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(lesson)
    })
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  const clearLesson = () => {
    setQuestions([])
    setLessonTitleText('')
  };

  let questionCards;
  if (questions.length !== 0) {
    questionCards = questions.map((question) => {
      return (
        <QuestionCard
          key={question.id}
          id={question.id}
          question={question.question}
          allAnswers={question.answers}
          reading={question.reading}
          deleteQuestion={deleteQuestion}
        />
      );
    });
  }

  return (
    <section className="lesson-preview">
      <h1 className="lesson-preview-title">{lessonTitleText}</h1>
      <section className="question-cards-container">
        {questions.length ? (
          questionCards
        ) : (
          <p className="no-questions-message">No questions yet</p>
        )}
      </section>
      <button disabled={isEnabled} onClick={createLesson} className="generate-lesson-btn">
        Generate Lesson
      </button>
    </section>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addLesson,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(LessonPreview);
