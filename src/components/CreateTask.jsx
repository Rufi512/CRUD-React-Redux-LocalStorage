import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

const CreateTasks = ({ sendForm, setEdit, edit, taskEdit }) => {
  var onMobile = false;
  const inputName = useRef(null);
  const taskBefore = useRef(null);
  const taskCreate = useRef(null);

  const getDateTime = () => {
    let tempDate = new Date();
    let date =
      tempDate.getFullYear() +
      "-" +
      ("0" + (tempDate.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + tempDate.getDate()).slice(-2);
    const currDate = date;
    return currDate;
  };

  const [task, setTask] = useState({ priority: "Low", date: getDateTime() });

  const [sendEditTask, setSendEditTask] = useState(false);

  useEffect(() => {
    if (taskEdit.task) {
      setTask(taskEdit.task);
      setSendEditTask(true);
      if (window.innerWidth <= 769) {
        showCreateTask(true);
      }
    } else {
      setSendEditTask(false);
    }
  }, [taskEdit]);

  const [minDate] = useState(getDateTime());

  const showCreateTask = (show) => {
    if (show === true && taskBefore.current && taskCreate.current) {
      taskBefore.current.style.opacity = "1";
      taskBefore.current.style.visibility = "visible";
      taskCreate.current.style.opacity = "1";
      taskCreate.current.style.visibility = "visible";
    }

    if (show === false && taskBefore.current && taskCreate.current) {
      taskBefore.current.style.opacity = "0";
      taskBefore.current.style.visibility = "hidden";
      taskCreate.current.style.opacity = "0";
      taskCreate.current.style.visibility = "hidden";
    }
  };

  const showMobile = (show) => {
    if (show === true && taskCreate.current) {
      taskCreate.current.style.opacity = "1";
      taskCreate.current.style.visibility = "visible";
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (window.innerWidth <= 769) {
      showCreateTask(false);
    }
    if (sendEditTask) {
      edit(task, taskEdit.index);
    } else {
      sendForm(task);
    }
    setSendEditTask(false);
    setTask({ priority: "Low", date: getDateTime() });
    inputName.current.focus();
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 769 && onMobile === true) {
      onMobile = false;
      showCreateTask(false);
    }

    if (window.innerWidth >= 769 && onMobile === false) {
      onMobile = true;
      showMobile(true);
    }
  });

  return (
    <React.Fragment>
      <i
        onClick={(e) => {
          showCreateTask(true);
          setTask({ priority: "Low", date: getDateTime() });
          setSendEditTask(false);
        }}
        className="fas fa-plus"
      ></i>

      <div ref={taskBefore} className="task-before"></div>

      <div ref={taskCreate} className="task-create">
        <i
          onClick={(e) => {
            showCreateTask(false);
            setSendEditTask(false);
            setTask({ priority: "Low", date: getDateTime() });
          }}
          className="fas fa-times-circle"
        ></i>

        <h2 style={{textTransform:'capitalize'}}>{sendEditTask === true ? "Edit the task" : "Create the task"}</h2>

        <form onSubmit={handleForm}>
          <div>
            <label>Name of the Task</label>
            <input
              type="text"
              ref={inputName}
              name="name"
              onChange={(e) => setTask({ ...task, name: e.target.value })}
              value={task.name || ""}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label>Description for the task</label>
            <textarea
              name="description"
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
              value={task.description || ""}
              autoComplete="off"
              required
            ></textarea>
          </div>
          <div>
            <label>Time to finish the task</label>
            <input
              type="date"
              min={minDate}
              value={task.date || ""}
              name="date"
              onChange={(e) => setTask({ ...task, date: e.target.value })}
              required
            />
          </div>

          <div>
            <label>Priority for the task</label>
            <select
              name="priority"
              onChange={(e) => setTask({ ...task, priority: e.target.value })}
              value={task.priority || ""}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="form-content" style={{ alignItems: "center" }}>
            <button type="submit">
              {sendEditTask === true ? "Edit Task" : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
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