import { addLesson } from './addLesson'
import { lesson } from '../mockData/mockData'

describe('addLesson', () => {
  it('Should return an initial state', () => {
    const expected = []
    const results = addLesson(undefined, {})
    expect(results).toEqual(expected)
  })

  it('Should add a lesson to the array', () => {
    const expected = [lesson]
    const results = addLesson(undefined, {
      type: 'ADD_LESSON',
      lessons: lesson
    })
    expect(results).toEqual(expected)
  })
})
