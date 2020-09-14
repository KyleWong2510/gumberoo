const initialState = [];

export const setStudentsResults = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_STUDENTS_RESULTS':
    return action.results
  default: 
    return state
  }
}