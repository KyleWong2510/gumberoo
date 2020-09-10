const initialState = 0

export const setCurrentQuestion = (state = initialState, action) => {
  switch (action.type) {
  case 'INCREMENT_CURRENT_QUESTION':
    return state + 1
  case 'RESET_CURRENT_QUESTION':
    return initialState
  case 'RESET':
    return initialState
  default:
    return state
  }
}