import React, { useState } from "react";
import "./QuestionFormCard.scss";
import AnswerInput from "./AnswerInput/AnswerInput";
import QuestionInput from "./QuestionInput/QuestionInput";

const QuestionFormCard = ({lessonTitleText, setLessonTitleText, questions, setQuestions}) => {
  const [questionText, setQuestionText] = useState("");
  const [correctAnswerText, setCorrectAnswerText] = useState("");
  const [incorrectAnswerText1, setIncorrectAnswerText1] = useState("")
  const [incorrectAnswerText2, setIncorrectAnswerText2] = useState("")
  const [incorrectAnswerText3, setIncorrectAnswerText3] = useState("")
  const [readingText, setReadingText] = useState("")

  const addQuestion = (e) => {
    e.preventDefault();
    createQuestion()
    clearInputs()
  };

  const createQuestion = () => {
    setQuestions([...questions, {
      id: Date.now(),
      desc: questionText,
      reading: readingText,
      answers: [
        {desc: correctAnswerText, correct: true},
        {desc: incorrectAnswerText1, correct: false},
        {desc: incorrectAnswerText2, correct: false},
        {desc: incorrectAnswerText3, correct: false}
      ]
    }])
  }

  const clearInputs = () => {
    setQuestionText('')
    setCorrectAnswerText('')
    setIncorrectAnswerText1('')
    setIncorrectAnswerText2('')
    setIncorrectAnswerText3('')
    setReadingText('')
    document.getElementById('assigned-reading').value = ''
  }

  return (
    <form className="question-form-card">
      <section className='question-form-input'>
        <label htmlFor='lesson-title'>Lesson Title:</label>
        <input
          id='lesson-title'
          type="text"
          placeholder="Enter Lesson Title..."
          value={lessonTitleText}
          aria-label="Lesson Title Input"
          onChange={(e) => setLessonTitleText(e.target.value)}
        />
      </section>
      <section className='assigned-reading-input'>
        <label htmlFor='assigned-reading'>Reading:</label>
        <textarea id='assigned-reading' onChange={(e) => setReadingText(e.target.value)}placeholder='Enter text...'></textarea>
      </section>
      <section className='question-form-input'>
        <label htmlFor='question-input'>Question:</label>
        <QuestionInput setQuestionText={(e) => setQuestionText(e.target.value)} questionText={questionText}/>
      </section>
      <section className='question-form-input'>
        <label htmlFor='answer-input'>Correct Answer:</label>
        <AnswerInput correct={true} answerText={correctAnswerText} setAnswerText={setCorrectAnswerText}/>
      </section>
      <section className='question-form-input'>
        <label htmlFor='answer-input'>Incorrect Answer:</label>
        <AnswerInput correct={false} answerText={incorrectAnswerText1} setAnswerText={setIncorrectAnswerText1}/>
      </section>
      <section className='question-form-input'>
        <label htmlFor='answer-input'>Incorrect Answer:</label>
        <AnswerInput correct={false} answerText={incorrectAnswerText2} setAnswerText={setIncorrectAnswerText2}/>
      </section>
      <section className='question-form-input'>
        <label htmlFor='answer-input'>Incorrect Answer:</label>
        <AnswerInput correct={false} answerText={incorrectAnswerText3} setAnswerText={setIncorrectAnswerText3}/>
      </section>
      <button className='add-question-btn' onClick={addQuestion}>Add Question</button>
      {/* <button>Delete Question</button> */}
    </form>
  );
};

export default QuestionFormCard;
