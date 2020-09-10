import { setStudent } from './setStudent'

describe('setStudentName reducer', () => {
  it('should return the initial state', () => {
    const expected = ''
    const result = setStudent(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should set the name in state', () => {
    const expected = 'BAM'
    const result = setStudent(undefined, {
      type: 'SET_STUDENT',
      student: 'BAM'
    })
    expect(result).toEqual(expected)
  })

  it('should reset the state', () => {
    const expected = ''

    setStudent(undefined, {
      type: 'SET_STUDENT',
      student: 'BAM'
    })

    const result = setStudent(undefined, {
      type: 'RESET'
    })
    
    expect(result).toEqual(expected)  
  })
})