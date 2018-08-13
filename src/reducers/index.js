import { combineReducers } from 'redux'
import listReducer from './listReducer'
import getItem from './getItem'

export default combineReducers({
	listReducer,
	getItem
})