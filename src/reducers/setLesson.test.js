import { setLesson } from './setLesson'
import lesson from '../mockData/mockData'

describe('setLesson', () => {
  it('Should return an initial state', () => {
    const expected = {}
    const results = setLesson(undefined, {})
    expect(results).toEqual(expected)
  })

  it('Should set a lesson', () => {
    const expected = lesson
    const results = setLesson(undefined, {
      type: 'SET_LESSON',
      lesson
    })
    expect(results).toEqual(expected)
  })

  it('Should reset a lesson', () => {
    const expected = {}
    const result = setLesson(undefined, {
      type: 'RESET'
    })
    expect(result).toEqual(expected)
  })
})