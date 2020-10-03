import React from 'react'
import './StudentCard.scss'

const StudentCard = ({ student, average, results, findStudent }) => {
  const renderAvg = () => {
    return (
      average.average_score ? 
      <p id={student.id}>Assessment Average: {average.average_score}%</p> :
      <p id={student.id}>Assessment Averate: N/A</p>
    )
  }

  return (
    <section
      className='student-card'
      id={student.id}
      key={student.id}
      onClick={(e) => findStudent(e)}
    >
      <h2 id={student.id}>{student.first_name} {student.last_name}</h2>
      
      {average && renderAvg()}
      
      <p id={student.id}>Assessments Completed: {results.length}</p>
    </section>
  )
}

export default StudentCard