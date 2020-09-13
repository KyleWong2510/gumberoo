import { setStudents } from './setStudents'
import student1 from '../mockData/mockData'
import student2 from '../mockData/mockData'
import student3 from '../mockData/mockData'

const students = [student1, student2]

describe('setStudents', () => {
  it('Should return an initial state', () => {
    const expected = []
    const results = setStudents(undefined, [])
    expect(results).toEqual(expected)
  })

  it('Should set students', () => {
    const expected = students
    const results = setStudents(undefined, {
      type: 'SET_STUDENTS',
      students
    })
    expect(results).toEqual(expected)
  })

  it('Should add a student', () => {
    const expected = [student1, student2, student3]
    const results = setStudents(students, {
      type: 'ADD_STUDENT',
      students: student3
    })
    expect(results).toEqual(expected)
  })

  it('Should reset students', () => {
    const expected = []
    const result = setStudents(undefined, {
      type: 'RESET'
    })
    expect(result).toEqual(expected)
  })
})