import { isLoading, hasErrored, setStudents } from '../actions'

export const getStudents = (teacherId) => {
  debugger
  const url = `https://cors-anywhere.herokuapp.com/https://gumberoo-backend.herokuapp.com/api/v1/teachers/${teacherId}/students`

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url) 
      console.log(response)
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
