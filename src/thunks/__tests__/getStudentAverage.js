import { getStudentAverage } from '../getStudentAverage'
import { isLoading, hasErrored, setStudentAverage } from '../../actions'
import { mockStudentAverage } from '../../mockData/mockData'

describe('getStudentAverage', () => {
  let mockStudentId, mockUrl, mockDispatch, mockAverage

  beforeEach(() => {
    mockStudentId = 1
    mockUrl =`https://gumberoo-backend.herokuapp.com/api/v1/students/${mockStudentId}/average_score/`
    mockDispatch = jest.fn()
    mockAverage = mockStudentAverage
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockAverage)
    }))
  })

  it('calls dispatch with isLoading(true)', () => {
    const thunk = getStudentAverage(mockStudentId)

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('calls fetch with the correct param', async () => {
    const thunk = getStudentAverage(mockStudentId)

    await thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    
    const thunk = getStudentAverage(mockStudentId)
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  })

  it('should dispatch isLoading(false) if response was ok', async () => {
    const thunk = getStudentAverage(mockStudentId)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch setTeacher with the correct params', async () => {
    const thunk = getStudentAverage(mockStudentId)

    mockDispatch = jest.fn().mockImplementation(() => mockAverage)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(setStudentAverage(mockAverage))
  })
})