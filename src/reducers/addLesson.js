export const addLesson = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LESSON':
      return [...state, action.lesson]
    default: 
      return state
  }
}