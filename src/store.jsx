import { createStore } from "redux";
import { loadStorageTasks } from "./localStorage";
const initialState = {
	tasks: loadStorageTasks().tasks,
	taskEdit: {},
};

const reducerTask = (state = initialState, action) => {
	if (action.type === "ADD_TASK") {
		return {
			...state,
			tasks: state.tasks.concat(action.task),
		};
	}

	if (action.type === "EDIT_TASK") {
		const task = state.tasks;
		task[action.index] = action.task;

		return {
			...state,
			tasks: state.tasks.slice(),
			taskEdit: {},
		};
	}

	if (action.type === "SET_EDIT_TASK") {
		return {
			...state,
			taskEdit: { task: action.task, index: action.index },
		};
	}

	if (action.type === "DELETE_TASK") {
		state.tasks.splice(action.index, 1);

		return {
			...state,
			tasks: state.tasks.slice(),
		};
	}

	return state;
};

export default createStore(reducerTask);