import { setStudentName } from './setStudentName'

describe('setStudentName reducer', () => {
  it('should return the initial state', () => {
    const expected = ''
    const result = setStudentName(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should set the name in state', () => {
    const expected = 'BAM'
    const result = setStudentName(undefined, {
      type: 'SET_STUDENT_NAME',
      studentName: 'BAM'
    })
    expect(result).toEqual(expected)
  })

  it('should reset the state', () => {
    const expected = ''

    setStudentName(undefined, {
      type: 'SET_STUDENT_NAME',
      studentName: 'BAM'
    })

    const result = setStudentName(undefined, {
      type: 'RESET'
    })
    
    expect(result).toEqual(expected)  
  })
})