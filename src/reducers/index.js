import { combineReducers } from 'redux'
import { setStudentName } from './setStudentName'
import { setLesson } from './setLesson'
import { isLoading } from './isLoading'
import { hasErrored } from './hasErrored'
import { setCurrentQuestion } from './setCurrentQuestion' 
import { setStudents } from './setStudents'
import { setLessonOver } from './setLessonOver'

export const rootReducer = combineReducers({
  setStudentName,
  isLoading,
  hasErrored,
  setLesson,
  setCurrentQuestion,
  setStudents,
  setLessonOver
})