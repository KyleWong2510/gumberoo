import { getLessonAverage } from '../getLessonAverage'
import { isLoading, hasErrored, setLessonAverage } from '../../actions'

describe('getLesson', () => {
  let mockLessonId
  let mockLessonAverage
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockLessonId = 1
    mockLessonAverage = {
      average_score: 80,
      lesson_id: 16
    }
    mockUrl = `https://gumberoo-backend.herokuapp.com/api/v1/lessons/${mockLessonId}/average_score/`
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockLessonAverage)
    }))
  })

  it('calls dispatch with isLoading(true)', () => {
    const thunk = getLessonAverage(mockLessonId)

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('calls fetch with the correct param', async () => {
    const thunk = getLessonAverage(mockLessonId)

    await thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    
    const thunk = getLessonAverage(mockLessonId) // again, this is the inner function that is returned
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  })

  it('should dispatch isLoading(false) if response was ok', async () => {
    const thunk = getLessonAverage(mockLessonId)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch setLesson with the correct params', async () => {
    const thunk = getLessonAverage(mockLessonId)

    mockDispatch = jest.fn().mockImplementation(() => mockLessonAverage)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(setLessonAverage(mockLessonAverage))
  })
})