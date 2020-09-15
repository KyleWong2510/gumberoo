import { isLoading, hasErrored, setStudentAverage } from '../actions'

export const getStudentAverage = (studentId) => {
  const url =`https://gumberoo-backend.herokuapp.com/api/v1/students/${studentId}/average_score/`

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url) 
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(isLoading(false))
      dispatch(setStudentAverage( data ))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}