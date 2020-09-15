import { getLesson } from '../getLesson'
import { lesson } from '../../mockData/mockData'
import { isLoading, hasErrored, setLesson } from '../../actions'

describe('getLesson', () => {
  let mockLesson
  let mockLessonId
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockLessonId = 1
    mockLesson = lesson 
    mockUrl =  `https://gumberoo-backend.herokuapp.com/api/v1/lessons/${mockLessonId}`
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockLesson)
    }))
  })

  it('calls dispatch with isLoading(true)', () => {
    const thunk = getLesson(mockLessonId)

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('calls fetch with the correct param', async () => {
    const thunk = getLesson(mockLessonId)

    await thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    
    const thunk = getLesson(mockLessonId) // again, this is the inner function that is returned
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  })

  it('should dispatch isLoading(false) if response was ok', async () => {
    const thunk = getLesson(mockLessonId)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch setTeacher with the correct params', async () => {
    const thunk = getLesson(mockLessonId)

    mockDispatch = jest.fn().mockImplementation(() => mockLesson)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(setLesson(mockLesson))
  })
})