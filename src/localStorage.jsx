export function loadStorageTasks() {
  const serializedState = localStorage.getItem("tasks");
  if (serializedState === null) {
    return { tasks: [] };
  } else {
    const data = JSON.parse(serializedState)
    data.tasks.map((el)=>{
      if (!el.id) return{...el, id: window.crypto.randomUUID()}
      return el
    })
    return data;
  }
}

export const saveTaskToLocalStorage = (task) => {
  const initialSave = JSON.stringify(task);
  localStorage.setItem("tasks", initialSave);
};
