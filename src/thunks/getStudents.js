import { isLoading, hasErrored, setStudents } from '../actions'

export const getStudents = () => {
  const url = `https://gumberoo-backend.herokuapp.com/api/v1/teachers/1/students/`

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url) 
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(isLoading(false))
      dispatch(setStudents( data))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}
