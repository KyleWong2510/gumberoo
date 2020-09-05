import { combineReducers } from 'redux'
import { setStudentName } from './setStudentName'
import { setLesson } from './setLesson'
import { isLoading } from './isLoading'
import { hasErrored } from './hasErrored' 

export const rootReducer = combineReducers({
  setStudentName,
  isLoading,
  hasErrored,
  setLesson
})