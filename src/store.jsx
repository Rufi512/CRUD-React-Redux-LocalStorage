import {createStore} from 'redux'
import {loadStorageTasks} from './localStorage'
const initialState = {
     
     tasks: loadStorageTasks().tasks

}

const reducerTask = (state = initialState,action) => {

	if(action.type === 'ADD_TASK'){
		return{
			...state,
			tasks:state.tasks.concat(action.task)
		}
	}

	if(action.type === 'EDIT_TASK'){
		const numArray = action.numArray
		const task = state.tasks
		task[numArray] = action.task
		return{
			...state,
			tasks: state.tasks.slice()
		}
	}

	if(action.type === 'DELETE_TASK'){
		return{
			...state,
			tasks:state.tasks.filter(task => task.id !== action.id)
		}
	}





	return state
}

export default createStore(reducerTask)