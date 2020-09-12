import { getTeacher } from '../getTeacher'
import { isLoading, hasErrored, setTeacher } from '../../actions'

describe('getTeacher', () => {
  let mockTeacherId
  let mockTeacher
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockTeacherId = 1
    mockTeacher = {
      "id": 1,
      "first_name": "test teacher",
      "last_name": "test teacher last"
    }
    mockUrl = `https://gumberoo-backend.herokuapp.com/api/v1/teachers/${mockTeacherId}`
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockTeacher)
    }))
  })

  it('calls dispatch with isLoading(true)', () => {
    const thunk = getTeacher(mockTeacherId)

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('calls fetch with the correct param', async () => {
    const thunk = getTeacher(mockTeacherId)

    await thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    
    const thunk = getTeacher(mockTeacherId) // again, this is the inner function that is returned
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  })

  it('should dispatch isLoading(false) if response was ok', async () => {
    const thunk = getTeacher(mockTeacherId)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch setTeacher with the correct params', async () => {
    const thunk = getTeacher(mockTeacherId)

    mockDispatch = jest.fn().mockImplementation(() => mockTeacher)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(setTeacher(mockTeacher))
  })
})