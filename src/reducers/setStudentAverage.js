const initialState = 0;

export const setStudentAverage = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_STUDENT_AVERAGE':
    return action.studentAverage
  default: 
    return state
  }
}