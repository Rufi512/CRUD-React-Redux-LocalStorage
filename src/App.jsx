import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import CreateTask from "./components/CreateTask";
import Tasks from "./components/Tasks";
import { saveTaskToLocalStorage } from "./localStorage";
const App = () => {
  store.subscribe(() => {
    saveTaskToLocalStorage({
      tasks: store.getState().tasks,
    });
  });

  return (
    <Provider store={store}>
      <div className="w-full h-full">
        <CreateTask/>
        <Tasks />
      </div>
    </Provider>
  );
};

export default App;
