const initialState = [];

export const setStudentAverage = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_STUDENT_AVERAGE':
    return [...state, action.studentAverage]
  default: 
    return state
  }
}