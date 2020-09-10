const initialState = {};

export const setTeacher = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_TEACHER':
    return action.teacher
  case 'RESET':
    return initialState
  default: 
    return state
  }
}