import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import AddIcon from "./icons/Add";
import CloseIcon from "./icons/Close";

const CreateTasks = ({ sendForm, setEdit, edit, taskEdit }) => {
  const inputName = useRef(null);
  const TITLE_LIMIT = 30;
  const DESCRIPTION_LIMIT = 150;
  const [showForm, setShowForm] = useState(false);
  const [task, setTask] = useState({
    name: "",
    description: "",
    priority: "Low",
  });

  const [sendEditTask, setSendEditTask] = useState(false);

  useEffect(() => {
    if (taskEdit.task) {
      setTask(taskEdit.task);
      setSendEditTask(true);
      setShowForm(true);
    } else {
      setSendEditTask(false);
    }
  }, [taskEdit]);

  const showCreateTask = () => {
    if (showForm === true) {
      return setShowForm(false);
    }
    setShowForm(true);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (sendEditTask) {
      edit(task, taskEdit.index);
    } else {
      sendForm({ ...task, id: window.crypto.randomUUID() });
    }
    setSendEditTask(false);
    showCreateTask(false);
    setTask({ name: "", description: "", priority: "Low" });
    inputName.current.focus();
  };

  return (
    <>
      <button
        onClick={() => {
          showCreateTask();
        }}
        type="button"
        className="fixed bottom-3 right-3 rounded-lg bg-[#5650a3] transition-all duration-300 hover:bg-[#312d63] min-h-[36px] min-w-[36px] flex justify-center items-center z-10"
      >
        <AddIcon />
      </button>

      <div
        className={`task-create absolute top-0 bottom-0 left-0 right-0 transition-all duration-300 w-full h-[100vh] p-3 bg-[#0a0a0a5c] flex justify-center items-center -z-10 ${
          showForm ? "opacity-100 z-30" : "opacity-0 -z-10"
        }`}
      >
        <div className="w-full h-[420px] bg-[#feeafa] dark:bg-[#33335f] max-w-[370px]">
          <button
            onClick={(e) => {
              showCreateTask(false);
              setSendEditTask(false);
              setTask({ name: "", description: "", priority: "Low" });
            }}
            type="button"
            className="min-w-[30px] min-h-[30px] rounded-sm dark:hover:bg-[#4242a3] transition-all duration-300 bg-[#5650a3]  flex items-center justify-center m-auto mr-0 outline-none hover:bg-[#312d63]"
          >
            <CloseIcon width={24} height={24} />
          </button>

          <form onSubmit={handleForm} className="mt-3 px-5">
            <h2
              className="w-full text-center font-semibold text-[20px] text-[#53336b] dark:text-[#d2cce5]"
              style={{ textTransform: "capitalize" }}
            >
              {sendEditTask === true ? "Edit the task" : "Create the task"}
            </h2>

            <div className="mt-3">
              <label
                htmlFor="name"
                className="block text-[#0f0e2b] dark:text-[#ddd5f1] text-md font-semibold mb-1 text-[14px]"
              >
                Name of the Task
              </label>
              <input
                type="text"
                ref={inputName}
                name="name"
                className="appearance-none  border border-[#c2c0e7] hover:border-[#261f7f] focus:border-[#261f7f]  transition-all duration-300 rounded w-full py-1 px-1 text-gray-700 mb-3 leading-tight focus:outline-none outline-none"
                onChange={(e) =>
                  e.target.value.length < TITLE_LIMIT + 1
                    ? setTask({ ...task, name: e.target.value })
                    : ""
                }
                value={task.name || ""}
                autoComplete="off"
                required
              />
              <div className="w-full flex justify-end items-center">
                <span className="text-[14px] dark:text-white">
                  <span>{task.name.length}</span>/{TITLE_LIMIT}
                </span>
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-[#0f0e2b] dark:text-[#ddd5f1] text-md font-semibold mb-1 text-[14px]"
              >
                Description for the task
              </label>
              <textarea
                name="description"
                className="appearance-none border border-[#c2c0e7] hover:border-[#261f7f] focus:border-[#261f7f] outline-none transition-all duration-300 rounded w-full py-1 px-1 text-[15px] resize-none h-[60px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) =>
                  e.target.value.length < DESCRIPTION_LIMIT + 1
                    ? setTask({ ...task, description: e.target.value })
                    : ""
                }
                value={task.description || ""}
                autoComplete="off"
                required
              ></textarea>
              <div className="w-full flex justify-end items-center">
                <span className="text-[14px] dark:text-white">
                  <span>{task.description.length}</span>/{DESCRIPTION_LIMIT}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-[#0f0e2b] dark:text-[#ddd5f1] text-md font-semibold mb-1 text-[14px]">
                Priority for the task
              </label>
              <select
                name="priority"
                className="block appearance-none w-full bg-white border border-[#3126bf]  hover:border-[#261f7f] outline-none transition-all duration-300  px-1 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setTask({ ...task, priority: e.target.value })}
                value={task.priority || ""}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div
              className="w-full flex justify-center items-center mt-3"
              style={{ alignItems: "center" }}
            >
              <button
                type="submit"
                className="m-auto bg-transparent duration-300 hover:bg-[#5650a3] text-[#5650a3] font-semibold hover:text-white dark:hover:bg-[#4242a3] py-2 px-4 border border-[#5650a3] hover:border-transparent rounded dark:border-white dark:text-white"
              >
                {sendEditTask === true ? "Edit Task" : "Create Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  taskEdit: state.taskEdit,
});

const mapDispatchToProps = (dispatch) => ({
  sendForm(task) {
    dispatch({
      type: "ADD_TASK",
      task,
    });
  },

  edit(task, index) {
    dispatch({
      type: "EDIT_TASK",
      task,
      index,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTasks);
