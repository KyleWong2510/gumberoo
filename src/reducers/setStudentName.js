const initialState = '';

export const setStudentName = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_STUDENT_NAME':
    return action.studentName
  case 'RESET':
    return initialState
  default: 
    return state
  }
}