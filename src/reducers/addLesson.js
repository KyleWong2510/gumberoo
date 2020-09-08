export const addLesson = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LESSON':
      return [...state, action.lessons]
    default: 
      return state
  }
}