import { setScore } from './setScore'

describe('setScore reducer', () => {
  it('should return the initial state', () => {
    const expected = 0
    const result = setScore(undefined, {})
    expect(result).toEqual(expected)
  }) 

  it('should increment state', () => {
    const expected = 25
    const result = setScore(undefined, {
      type: 'INCREMENT_SCORE',
      score: 25
    })
    expect(result).toEqual(expected)
  })

  it('should reset state', () => {
    const expected = 0

    setScore(undefined, {
      type: 'INCREMENT_SCORE',
      score: 25
    })

    const result = setScore(undefined, {
      type: 'RESET'
    })
    expect(result).toEqual(expected)
  })
})