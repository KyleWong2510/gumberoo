import { isLoading, hasErrored, setLesson } from '../actions'

export const getLesson = (teacherId, lessonId) => {
  const url =` https://gumberoo-backend.herokuapp.com/api/v1/teachers/${teacherId}/${lessonId}`

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url) 
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(isLoading(false))
      dispatch(setLesson( data.data ))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}
