export const setLesson = lesson => ({
  type: 'SET_LESSON',
  lesson
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