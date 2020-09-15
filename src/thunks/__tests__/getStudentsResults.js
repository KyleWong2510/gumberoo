import { getStudentsResults } from '../getStudentsResults'
import { isLoading, hasErrored, setStudentsResults } from '../../actions'
import { mockStudentsResults } from '../../mockData/mockData'
describe('getStudentsResults', () => {
  let mockLessonId, mockUrl, mockResults, mockDispatch

  beforeEach(() => {
    mockLessonId = 1
    mockUrl = `https://gumberoo-backend.herokuapp.com/api/v1/lessonstudents/${mockLessonId}/`
    mockResults = mockStudentsResults
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResults)
    }))
  })

  it('calls dispatch with isLoading(true)', () => {
    const thunk = getStudentsResults(mockLessonId)

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('calls fetch with the correct param', async () => {
    const thunk = getStudentsResults(mockLessonId)

    await thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    
    const thunk = getStudentsResults(mockLessonId) // again, this is the inner function that is returned
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  })

  it('should dispatch isLoading(false) if response was ok', async () => {
    const thunk = getStudentsResults(mockLessonId)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch setTeacher with the correct params', async () => {
    const thunk = getStudentsResults(mockLessonId)

    mockDispatch = jest.fn().mockImplementation(() => mockResults)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(setStudentsResults(mockResults))
  })
})