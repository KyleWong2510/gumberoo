import { isLoading, hasErrored, setLessonAverage } from '../actions'

export const getLessonAverage = (lessonID) => {
  const url =`https://gumberoo-backend.herokuapp.com/api/v1/lessons/${lessonID}/average_score/`

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url) 
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(isLoading(false))
      console.log('thunk data', data);
      dispatch(setLessonAverage(data))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}