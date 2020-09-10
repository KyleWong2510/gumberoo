import { setTeacher } from './setTeacher'

describe('setTeacher reducer', () => {
  it('should return the initial state', () => {
    const expected = {}
    const result = setTeacher(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should set the name in state', () => {
    const expected = {
      "id": 1,
      "first_name": "test teacher",
      "last_name": "test teacher last"
    }
    const result = setTeacher(undefined, {
      type: 'SET_TEACHER',
      teacher: expected
    })
    expect(result).toEqual(expected)
  })

  it('should reset the state', () => {
    const expected = {}

    setTeacher(undefined, {
      type: 'SET_TEACHER',
      teacher: 'BAM'
    })

    const result = setTeacher(undefined, {
      type: 'RESET'
    })
    
    expect(result).toEqual(expected)  
  })
})