const initialState = false

export const setLessonOver = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_LESSON_OVER':
    return action.lessonOver
  default: 
    return state
  }
}