const initialState = {};

export const setLessonAverage = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_LESSON_AVERAGE':
    return action.average
  case 'RESET':
    return initialState
  default: 
    return state
  }
}