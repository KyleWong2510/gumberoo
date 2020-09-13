import React from 'react'

const LessonDetails = ({ lesson }) => {
return(
  <section>
    <h3>{lesson.name}</h3>
    <p>Scores will be shown here</p>
  </section>
)
}

export default LessonDetails