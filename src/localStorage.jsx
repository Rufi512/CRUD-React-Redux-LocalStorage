  
export function loadStorageTasks (){
	const serializedState = localStorage.getItem('tasks')
	if(serializedState === null){
		return {tasks:[]};
	}else{
		return JSON.parse(serializedState)
	}
}

export const saveTaskToLocalStorage = (task)=>{
const initialSave = JSON.stringify(task)
localStorage.setItem('tasks',initialSave)
}

