import { setStudentId } from './setStudentId'

describe('setStudentId', () => {
  it('should return the initial state', () => {
    const expected = null
    const result = setStudentId(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should set the name in state', () => {
    const expected = 4
    const result = setStudentId(undefined, {
      type: 'SET_STUDENT_ID',
      studentId: 4
    })
    expect(result).toEqual(expected)
  })

  it('should reset the state', () => {
    const expected = null

    setStudentId(undefined, {
      type: 'SET_STUDENT_ID',
      studentId: null
    })

    const result = setStudentId(undefined, {
      type: 'RESET'
    })
    
    expect(result).toEqual(expected)  
  })
})