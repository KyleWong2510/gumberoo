import { isLoading, hasErrored, setLessons } from '../actions'

export const getLessons = (teacherId) => {
  const url = `https://gumberoo-backend.herokuapp.com/api/v1/teachers/${teacherId}/lessons`

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url) 
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(isLoading(false))
      dispatch(setLessons(data))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}
