import { isLoading, hasErrored, setStudentsResults } from '../actions'

export const getStudentsResults = (lessonId) => {
  const url = `https://gumberoo-backend.herokuapp.com/api/v1/lessonstudents/${lessonId}/`

  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(isLoading(false))
      dispatch(setStudentsResults(data))
      console.log('THUNK')
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}