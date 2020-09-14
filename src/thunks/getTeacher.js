import { isLoading, hasErrored, setTeacher } from '../actions'

export const getTeacher = () => {
  const url =`https://gumberoo-backend.herokuapp.com/api/v1/teachers/2/`

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url) 
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(isLoading(false))
      dispatch(setTeacher( data ))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}
