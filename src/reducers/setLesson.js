export const lessons = (state = [], action) => {
  switch (action.type) {
    case 'SET_LESSON':
      return [...state, action.lesson]
    default: 
      return state
  }
}