import { setLesson } from './setLesson'

describe('setLessons', () => {
  it('Should return an initial state', () => {
    const expected = []
    const results = setLesson(undefined, {})
    expect(results).toEqual(expected)
  })
})