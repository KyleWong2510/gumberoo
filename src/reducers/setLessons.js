const initialState = [];

export const setLessons = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_LESSONS':
    return action.lessons
  case 'RESET':
    return initialState
  default:
    return state
  }
}