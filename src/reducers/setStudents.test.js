import { setStudents } from './setStudents'

describe('setStudents', () => {
  it('Should return an initial state', () => {
    const expected = []
    const results = setStudents(undefined, [])
    expect(results).toEqual(expected)
  })
})