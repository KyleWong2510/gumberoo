import React, { useState } from "react";
import "./QuestionFormCard.scss";
import AnswerInput from "./AnswerInput/AnswerInput";
import QuestionInput from "./QuestionInput/QuestionInput";

const QuestionFormCard = () => {
  const [question, setQuestion] = useState({});
  const [questionText, setQuestionText] = useState("");
  const [correctAnswerText, setCorrectAnswerText] = useState("");
  const [incorrectAnswerText1, setIncorrectAnswerText1] = useState("")
  const [incorrectAnswerText2, setIncorrectAnswerText2] = useState("")
  const [incorrectAnswerText3, setIncorrectAnswerText3] = useState("")
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [lessonTitleText, setLessonTitleText] = useState("");
  const [readingText, setReadingText] = useState("")

  const addQuestion = (e) => {
    e.preventDefault();
    incorrectAnswers.push(incorrectAnswerText1, incorrectAnswerText2, incorrectAnswerText3)
    setQuestion({id : Date.now(), reading: readingText, question: questionText, correctAnswer: correctAnswerText, wrongAnswer:incorrectAnswers});
    // setQuestion(""); - will uncomment when post is completed
  };

  // const setQuestionText = (e) => {
  //   e.preventDefault()
  //   setQuestionText(questionText)
  //   setQuestionText('')
  // }

  // lesson = [
  // {
  // id: 34
  // lessonTitle: 'Africa',
  // questions: [{
  //  id: 46,
  //  reading: '',
  //  question: 'What is the King of the Jungle?',
  //  correctAnswer: 'Lion'
  //  wrongAnswer: ['4', 'yellow']
  //  }]
  // }
  // ]
  // validate that one answer is correct & one is incorrect, if not error you need one correct & one
  // incorrect to save this question".

  return (
    // save input of renderAnswers to variable here
    // {}
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
      {/* Will push into answers array, trigger rerender and boom, magic */}

      <button className='add-question-btn' onClick={addQuestion}>Add Question</button>
      {/* <button>Delete Question</button> */}
    </form>

  );
};

//  Have a Question Input
//  Have a correct Answer Input
//  A Wrong Answer Input with plus and minus buttons next to it, follow the logic
//  A new Question button
//  A delete question button, follow the logic
//  An add Reading button that renders a text area.

export default QuestionFormCard;
