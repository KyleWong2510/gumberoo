import { setStudent } from './setStudent'

describe('setStudent reducer', () => {
  it('should return the initial state', () => {
    const expected = null
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
    const expected = null

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