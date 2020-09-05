import * as actions from './index'

describe('actions', () => {
  it('Should set the player name', () => {
    const studentName = 'Bill'

    const expectedAction = {
      type: 'SET_STUDENT_NAME',
      studentName: 'Bill'
    }

    const result = actions.setStudentName(studentName)

    expect(result).toEqual(expectedAction)
  })
})