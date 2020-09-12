import { combineReducers } from 'redux'
import { setStudent } from './setStudent'
import { setLesson } from './setLesson'
import { isLoading } from './isLoading'
import { hasErrored } from './hasErrored'
import { setCurrentQuestion } from './setCurrentQuestion' 
import { setStudents } from './setStudents'
import { setLessonOver } from './setLessonOver'
import { setScore } from './setScore'
import { addLesson } from './addLesson'
import { setStudentId } from './setStudentId'
import { setLessons } from './setLessons'
import { setTeacher } from './setTeacher'

export const rootReducer = combineReducers({
  setStudent,
  isLoading,
  hasErrored,
  setLesson,
  setCurrentQuestion,
  setStudents,
  setLessonOver, 
  setScore,
  addLesson,
  setStudentId,
  setLessons,
  setTeacher
})