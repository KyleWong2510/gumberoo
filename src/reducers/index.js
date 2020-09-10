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

export const rootReducer = combineReducers({
  setStudent,
  isLoading,
  hasErrored,
  setLesson,
  setCurrentQuestion,
  setStudents,
  setLessonOver, 
  setScore,
  addLesson
})