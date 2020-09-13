import * as actions from './index'
import { lesson, student, teacher } from '../mockData/mockData'

describe('actions', () => {
  it('Should set the lesson', () => {

    const expectedAction = {
      type: 'SET_LESSON',
      lesson: lesson
    }

    const result = actions.setLesson(lesson)

    expect(result).toEqual(expectedAction)
  })

  it('Should set the lessons', () => {
    const lessons = [lesson, lesson, lesson]
    const expectedAction = {
      type: 'SET_LESSONS',
      lessons: lessons
    }

    const result = actions.setLessons(lessons)

    expect(result).toEqual(expectedAction)
  })

  it('Should set the students', () => {
    const students = [student, student, student]
    const expectedAction = {
      type: 'SET_STUDENTS',
      students: students
    }

    const result = actions.setStudents(students)

    expect(result).toEqual(expectedAction)
  })

  it('Should set the student', () => {
    const expectedAction = {
      type: 'SET_STUDENT',
      student: student
    }

    const result = actions.setStudent(student)

    expect(result).toEqual(expectedAction)
  })

  it('Should set the teacher', () => {
    const expectedAction = {
      type: 'SET_TEACHER',
      teacher: teacher
    }

    const result = actions.setTeacher(teacher)

    expect(result).toEqual(expectedAction)
  })

  it('Should add a Lesson', () => {

    const expectedAction = {
      type: 'ADD_LESSON',
      lessons: lesson
    }

    const result = actions.addLesson(lesson)

    expect(result).toEqual(expectedAction)
  })

  it('Should add a student', () => {

    const expectedAction = {
      type: 'ADD_STUDENT',
      student: student
    }

    const result = actions.addStudent(student)

    expect(result).toEqual(expectedAction)
  })

  it('Should set isLoading', () => {
    const bool = true;

    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: true
    }

    const result = actions.isLoading(bool)

    expect(result).toEqual(expectedAction)
  })

  it('Should set hasErrored', () => {
    const msg = 'Youve Errored!';

    const expectedAction = {
      type: 'HAS_ERRORED',
      message: 'Youve Errored!'
    }

    const result = actions.hasErrored(msg)

    expect(result).toEqual(expectedAction)
  })

  it('Should reset the game', () => {
    const expectedAction = {
      type: 'RESET'
    }
    
    const result = actions.reset()

    expect(result).toEqual(expectedAction)
  })

  it('Should increment the current question', () => {

    const expectedAction = {
      type: 'INCREMENT_CURRENT_QUESTION',
    }

    const result = actions.incrementCurrentQuestion()

    expect(result).toEqual(expectedAction)
  })


  it('Should reset the current question', () => {

    const expectedAction = {
      type: 'RESET_CURRENT_QUESTION',
    }

    const result = actions.resetCurrentQuestion()

    expect(result).toEqual(expectedAction)
  })

  it('Should set lessonOver', () => {
    const bool = true;

    const expectedAction = {
      type: 'SET_LESSON_OVER',
      lessonOver: true
    }

    const result = actions.setLessonOver(bool)

    expect(result).toEqual(expectedAction)
  })
})