import React,{useState,useEffect} from "react";
import { Provider } from "react-redux";
import store from "./store";
import CreateTask from "./components/CreateTask";
import Tasks from "./components/Tasks";
import ThemeSwitch from "./components/ThemeSwitch";
import { saveTaskToLocalStorage } from "./localStorage";

const App = () => {
  store.subscribe(() => {
    saveTaskToLocalStorage({
      tasks: store.getState().tasks,
    });
  });

  const [theme,setTheme] = useState(()=>{
    if((window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches && localStorage.getItem("theme") !== "light") || localStorage.getItem("theme") === "dark") {
      return "dark";
    } else {
      return "light";
    }
  })
  
  useEffect(()=>{
    if(theme === "dark"){ 
      document.body.classList.add("dark")
    } else{
      document.body.classList.remove("dark")
    }
    localStorage.setItem("theme",theme)
  },[theme])
  const handleSchemeColor = ()=>{
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  return (
    <Provider store={store}>
      <div className="w-full min-h-full transition-all duration-300 bg-[#FEEAFA] dark:bg-[#1d1d29]">
        <ThemeSwitch handleSchemeColor={handleSchemeColor} theme={theme}/>
        <CreateTask/>
        <Tasks />
      </div>
    </Provider>
  );
};

export default App;
