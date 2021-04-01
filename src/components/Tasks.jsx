import React from "react";
import { connect } from "react-redux";

const Tasks = ({ tasks, setEdit, remove }) => {

  if (tasks.length === 0) {
    return (
      <div className="tasks" style={{height:'100vh'}}>
        <h1>Tasks List</h1>
        <p style={{margin:'auto'}}>You have no task on the list! </p>
      </div>
    );
  }

  return (
    <div className="tasks">
      <h1 style={{ marginBottom: "0" }}>Tasks List</h1>

      <div className="tasks-container">
        {tasks.map((task, i) => {
          return (
            <div className="task" key={i}>
              <div className="options">
                <i
                  onClick={(e) => {
                    setEdit(task, i);
                  }}
                  className="fas fa-edit"
                ></i>
                <i
                  onClick={(e) => {
                    remove(i);
                    setEdit(null);
                  }}
                  className="fas fa-trash"
                ></i>
              </div>

              <h3>{task.name}</h3>
              <p style={{ wordBreak: "break-word" }}>{task.description}</p>
              <div className="task-footer">
                <div>
                  <i
                    className="fas fa-exclamation-circle"
                    style={{ marginRight: "5px" }}
                  ></i>
                  <p>{task.priority}</p>
                </div>
                <div>
                  <i
                    className="fas fa-clock"
                    style={{ marginRight: "5px" }}
                  ></i>{" "}
                  <p>{task.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  setEdit(task, index) {
    dispatch({
      type: "SET_EDIT_TASK",
      task,
      index,
    });
  },

  remove(index) {
    dispatch({
      type: "DELETE_TASK",
      index,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);