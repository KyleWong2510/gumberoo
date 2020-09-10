const initialState = {};

export const setLesson = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_LESSON':
    return action.lesson
  case 'RESET':
    return initialState
  default:
    return state
  }
}