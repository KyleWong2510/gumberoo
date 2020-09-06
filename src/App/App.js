import React from 'react';
import TeacherHeader from '../TeacherHeader/TeacherHeader'
import TeacherLogin from '../TeacherLogin/TeacherLogin'
import './App.scss';
import QuestionFormCard from '../QuestionFormCard/QuestionFormCard';

function App() {
  return (
    <main className="App">
      <TeacherHeader />
      {/* <TeacherLogin /> */}
      <QuestionFormCard />
    </main>
  )
}


export default App;
