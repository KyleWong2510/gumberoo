import { getStudents } from '../getStudents'
import { lesson } from '../../mockData/mockData'
import { isLoading, hasErrored, setStudents } from '../../actions'

describe('getStudents', () => {
  let mockTeacherId
  let mockStudents
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockTeacherId = 2
    mockStudents = [   
      {   
          "teacher": 1,   
          "id": 1,   
          "first_name": "newStudent1First",   
          "last_name": "newStudent1Last"
      },   
      {   
          "teacher": 1,   
          "id": 2,   
          "first_name": "newStudent2First",   
          "last_name": "newStudent2Last" 
      }   
    ]   
    mockUrl = `https://gumberoo-backend.herokuapp.com/api/v1/teachers/${mockTeacherId}/students/`
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockStudents)
    }))
  })

  it('calls dispatch with isLoading(true)', () => {
    const thunk = getStudents(mockTeacherId)

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('calls fetch with the correct param', async () => {
    const thunk = getStudents(mockTeacherId)

    await thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    
    const thunk = getStudents(mockTeacherId) // again, this is the inner function that is returned
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  })

  it('should dispatch isLoading(false) if response was ok', async () => {
    const thunk = getStudents(mockTeacherId)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch setTeacher with the correct params', async () => {
    const thunk = getStudents(mockTeacherId)

    mockDispatch = jest.fn().mockImplementation(() => mockStudents)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(setStudents(mockStudents))
  })
})