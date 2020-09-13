import { setLessons } from './setLessons'
<<<<<<< HEAD
import lesson from '../mockData/mockData'


const lessons = [lesson, lesson]

describe('setLessons', () => {
  it('should return initial state', () => {
    const expected = []
    const result = setLessons(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should set lessons', () => {
    const expected = lessons
    const results = setLessons(undefined, {
      type: 'SET_LESSONS',
      lessons
    })
    expect(results).toEqual(expected)
  })

  it('should reset lessons', () => {
    const expected = []
    const result = setLessons(undefined, {
      type: 'RESET'
    })
    expect(result).toEqual(expected)
  })
})
=======
import { lesson } from '../mockData/mockData' 

describe('setLessons', () => {
  it('Should return an initial state', () => {
    const expected = []
    const results = setLessons(undefined, {})
    expect(results).toEqual(expected)
  })

  it('Should return a set of Lessons', () => {
    const expected =   [lesson, lesson, lesson]
    const results = setLessons(undefined, {
      type: 'SET_LESSONS',
      lessons: expected
    }) 

    expect(results).toEqual(expected)
  })
})
>>>>>>> master
