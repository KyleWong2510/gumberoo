import React from 'react';
import TeacherHeader from '../TeacherHeader/TeacherHeader'
import TeacherLogin from '../TeacherLogin/TeacherLogin'
import './App.scss';
import CreateLesson from '../CreateLesson/CreateLesson'
function App() {
  return (
    <main className="App">
      <TeacherHeader />
      {/* <TeacherLogin /> */}
      <CreateLesson />
    </main>
  )
}


export default App;
