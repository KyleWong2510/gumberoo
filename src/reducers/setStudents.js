const initialState = [];

export const setStudents = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_STUDENTS':
    return action.students
  case 'ADD_STUDENT':
    return [...state, action.student]
  case 'RESET':
    return initialState
  default:
    return state
  }
}