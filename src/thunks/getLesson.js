import { isLoading, hasErrored, setLesson } from '../actions'

export const getLesson = (lessonId) => {
  const url = `https://cors-anywhere.herokuapp.com/https://gumberoo-backend.herokuapp.com/api/v1/lessons/2`

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url) 
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      console.log(data)
      dispatch(isLoading(false))
      dispatch(setLesson( data ))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}
