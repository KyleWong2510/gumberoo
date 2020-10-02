import React from 'react'

const StudentCard = ({ student, average, results, findStudent }) => {
  const renderAvg = () => {
    return (
      average.average_score ? 
      <p>Assessment Average: {average.average_score}%</p> :
      <p>Assessment Averate: N/A</p>
    )
  }

  return (
    <section
      className='student-card'
      id={student.id}
      key={student.id}
      onClick={(e) => findStudent(e)}
    >
      <h2>{student.first_name} {student.last_name}</h2>
      
      {average && renderAvg()}
      
      <p>Assessments Completed: {results.length}</p>
    </section>
  )
}

export default StudentCard