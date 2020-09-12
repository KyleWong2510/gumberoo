import React from 'react'
import './StudentDetails.scss'

const StudentDetails = ({ student }) => {
  return (
    <section>
      <h1>{`${student.first_name} ${student.last_name}`}</h1>
    </section>
  )
}

export default StudentDetails