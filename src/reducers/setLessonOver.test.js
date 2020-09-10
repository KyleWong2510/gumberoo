import { setLessonOver } from './setLessonOver'

describe('isLoading reducer', () => {
  it('should return an initial state', () => {
    const expected = false
    const result = setLessonOver(undefined, {})
    expect(result).toEqual(expected)  
  })

  it('should change the state', () => {
    const expected = true
    const result = setLessonOver(undefined, {
      type: 'SET_LESSON_OVER',
      lessonOver: true
    })
    expect(result).toEqual(expected)
  })
})