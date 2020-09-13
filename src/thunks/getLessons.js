import { isLoading, hasErrored, setLessons } from '../actions'

export const getLessons = () => {
  const url = `https://gumberoo-backend.herokuapp.com/api/v1/teachers/1/lessons/`

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
