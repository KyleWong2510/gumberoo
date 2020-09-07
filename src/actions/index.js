export const setLesson = lesson => ({
  type: 'SET_LESSON',
  lesson
})

export const setStudents = students => ({
  type: 'SET_STUDENTS',
  students
})


export const setStudentName = studentName => ({
  type: 'SET_STUDENT_NAME',
  studentName
})

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
})

export const reset = () => ({
  type: 'RESET'
})

export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const incrementCurrentQuestion = () => ({
  type: 'INCREMENT_CURRENT_QUESTION',
})

export const resetCurrentQuestion = () => ({
  type: 'RESET_CURRENT_QUESTION',
})

export const incrementScore = score => ({
  type: 'INCREMENT_SCORE',
  score
})