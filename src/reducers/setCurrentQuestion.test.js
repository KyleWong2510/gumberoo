import { setCurrentQuestion } from './setCurrentQuestion'

describe('setCurrentQuestion reducer', () => {
  it('should return an initial state', () => {
    const expected = 0
    const result = setCurrentQuestion(undefined, {})
    expect(result).toEqual(expected)  
  })

  it('should increment state', () => {
    const expected = 1
    const result = setCurrentQuestion(undefined, {
      type: 'INCREMENT_CURRENT_QUESTION'
    })
    expect(result).toEqual(expected)
  })

  it('should reset state', () => {
    const expected = 0

    setCurrentQuestion(undefined, { type: 'INCREMENT_CURRENT_QUESTION' })
    setCurrentQuestion(undefined, { type: 'INCREMENT_CURRENT_QUESTION' })

    const result = setCurrentQuestion(undefined, {
      type: 'RESET_CURRENT_QUESTION'
    })

    expect(result).toEqual(expected)
  })

  it('should reset state', () => {
    const expected = 0

    setCurrentQuestion(undefined, { type: 'INCREMENT_CURRENT_QUESTION' })
    setCurrentQuestion(undefined, { type: 'INCREMENT_CURRENT_QUESTION' })

    const result = setCurrentQuestion(undefined, {
      type: 'RESET'
    })

    expect(result).toEqual(expected)
  })
})