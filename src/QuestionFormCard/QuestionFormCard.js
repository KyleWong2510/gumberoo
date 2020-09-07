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
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [lessonTitleText, setLessonTitleText] = useState("");
  const [lessonQuestions, setLessonQuestions] = useState([]);

  const addQuestion = (e) => {
    e.preventDefault();
    setQuestion(question);
    setQuestion("");
  };

  // const setQuestionText = (e) => {
  //   e.preventDefault()
  //   setQuestionText(questionText)
  //   setQuestionText('')
  // }

  // lesson = [
  //{
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
        <input
          type="text"
          placeholder="Enter Lesson Title..."
          value={lessonTitleText}
          aria-label="Lesson Title Input"
          onChange={(e) => setLessonTitleText(e.target.value)}
        />
        <label htmlFor='assigned-reading'>Add an Assigned Reading</label>
        <textarea id='assigned-reading' placeholder='Enter text...'></textarea>
        <QuestionInput setQuestionText={(e) => setQuestionText(e.target.value)} questionText={questionText}/>
        <AnswerInput correct={true} answerText={correctAnswerText} setAnswerText={setCorrectAnswerText}/>
        <AnswerInput correct={false} answerText={incorrectAnswerText1} setAnswerText={setIncorrectAnswerText1}/>
        <AnswerInput correct={false} answerText={incorrectAnswerText2} setAnswerText={setIncorrectAnswerText2}/>
        <AnswerInput correct={false} answerText={incorrectAnswerText3} setAnswerText={setIncorrectAnswerText3}/>
        {/* Will push into answers array, trigger rerender and boom, magic */}

        <button onClick={addQuestion}>Add Question</button>
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
