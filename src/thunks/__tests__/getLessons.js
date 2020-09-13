import { getLessons } from '../getLessons'
import { lesson } from '../../mockData/mockData'
import { isLoading, hasErrored, setLessons } from '../../actions'

describe('getStudents', () => {
  let mockTeacherId
  let mockLessons
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockTeacherId = 1
    mockLessons = [lesson, lesson, lesson]  
    mockUrl = `https://gumberoo-backend.herokuapp.com/api/v1/teachers/1/lessons/`
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockLessons)
    }))
  })

  it('calls dispatch with isLoading(true)', () => {
    const thunk = getLessons()

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('calls fetch with the correct param', async () => {
    const thunk = getLessons()

    await thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    
    const thunk = getLessons(mockTeacherId) // again, this is the inner function that is returned
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  })

  it('should dispatch isLoading(false) if response was ok', async () => {
    const thunk = getLessons()
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch setTeacher with the correct params', async () => {
    const thunk = getLessons()

    mockDispatch = jest.fn().mockImplementation(() => mockLessons)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(setLessons(mockLessons))
  })
})