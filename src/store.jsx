import { createStore } from "redux";
import { loadStorageTasks } from "./localStorage";
const initialState = {
	tasks: loadStorageTasks().tasks,
	taskEdit: {},
	task:{name:'', description:'', priority: "Low", checked:false }
};

const reducerTask = (state = initialState, action) => {
	if (action.type === "ADD_TASK") {
		return {
			...state,
			tasks: state.tasks.concat(action.task),
		};
	}

	if (action.type === "EDIT_TASK") {
		const list = state.tasks.map((el)=>{
			if(action.task.id === el.id){
				return action.task
			}
			return el
		})

		return {
			...state,
			tasks: list,
		};
	}

	if (action.type === "SET_EDIT_TASK") {
		return {
			...state,
			taskEdit: { task: action.task, index: action.index },
		};
	}

	if (action.type === "RE_ORDER_TASKS") {
		const taskList = [...state.tasks]
		const card = action.cardId;
		const cardSelect = taskList.find(el => el.id === card);
		cardSelect.priority = action.priority;
	
		if (action.id) {
		  const indexCard = taskList.findIndex((obj) => obj.id === cardSelect.id); //Indice de la card
		  taskList.splice(indexCard, 1)  // Elimina el elemento y lo guarda en una variable
		  const index = taskList.findIndex((obj) => obj.id === action.id); // Obtengo el indice del objeto donde dropea
		  if(index < 0) return {...state}
		  const position = index === 0 ? 0 : index === taskList.length - 1 ? index - 1 : index;
		  taskList.splice(position || 0, 0, cardSelect);
		  return  {...state,tasks: taskList};
		}
		// Change priority from id
		const filtered = state.tasks.filter((el) => el.id !== card);
		filtered.push(cardSelect);
		return {
			...state,
			tasks: filtered,
		};
	}

	if (action.type === "DELETE_TASK") {
		const filtered = state.tasks.filter(el=> el.id !== action.id);

		return {
			...state,
			tasks: filtered,
		};
	}

	if (action.type === "SET_CHECKED_TASK") {
		const list = state.tasks.map((el)=>{
			if(action.task.id === el.id){
				return {...el,checked:action.task.checked}
			}
			return el
		})

		return {
			...state,
			tasks: list,
		};
	}

	return state;
};

export default createStore(reducerTask);