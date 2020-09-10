export const setLesson = lesson => ({
  type: 'SET_LESSON',
  lesson
})

export const setStudents = students => ({
  type: 'SET_STUDENTS',
  students
})


export const setStudent= student => ({
  type: 'SET_STUDENT',
  student
})

export const setTeacher = teacher => ({
  type: 'SET_TEACHER',
  teacher
})

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
})

export const reset = () => ({
  type: 'RESET'
})

export const addLesson = lessons => ({
  type: 'ADD_LESSON',
  lessons
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

export const setLessonOver= bool => ({
  type: 'SET_LESSON_OVER',
  lessonOver: bool
})