const initialState = null;
//have to change this to an object when it comes time

export const setStudentId = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_STUDENT_ID':
    return action.studentId
  case 'RESET':
    return initialState
  default: 
    return state
  }
}