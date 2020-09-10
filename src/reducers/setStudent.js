const initialState = '';
//have to change this to an object when it comes time

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