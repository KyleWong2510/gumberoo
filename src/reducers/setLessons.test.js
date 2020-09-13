import { setLessons } from './setLessons'
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
