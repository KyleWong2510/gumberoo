import { setStudents } from './setStudents'
import { student } from '../mockData/mockData'

describe('setStudents', () => {
  it('Should return an initial state', () => {
    const expected = []
    const results = setStudents(undefined, [])
    expect(results).toEqual(expected)
  })

  it('Should return a set of students', () => {
    const expected =   [student, student, student]
    const results = setStudents(undefined, {
      type: 'SET_STUDENTS',
      students: expected
    }) 

    expect(results).toEqual(expected)
  })
})