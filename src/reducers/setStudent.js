const initialState = {};

export const setStudent = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_STUDENT':
    return action.student
  case 'RESET':
    return initialState
  default: 
    return state
  }
}