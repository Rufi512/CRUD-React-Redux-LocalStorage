import React, { useState } from "react";
import { connect } from "react-redux";
import TrashIcon from "./icons/Trash";
import EditIcon from "./icons/Edit";
import DragIcon from "./icons/Drag";
import PinIcon from "./icons/Pin";
import { AnimatePresence, motion } from "framer-motion";

const Tasks = ({ tasks, setEdit, reOrderTasks, remove, checkTask }) => {
  const priorityTasks = ["low", "medium", "high"];

  const [dragStart, setDragStart] = useState(false);

  const [openTask, setOpenTask] = useState("");

  const [overId, setOverId] = useState("");

  const [taskDraggable, setTaskDraggable] = useState("");

  const variantAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const showTask = (id) => {
    if (openTask === id) {
      return setOpenTask("");
    }
    setOpenTask(id);
  };

  if (tasks.length === 0) {
    return (
      <div className="w-full p-3" style={{ height: "100vh" }}>
        <h1 className="text-center text-[2em] text-[#53336b] font-semibold tracking-wide">
          ToDo List
        </h1>
        <p className="text-center">You don't have things to do for now!</p>
      </div>
    );
  }

  const handleDragStart = (e, element) => {
    e.dataTransfer.setData("CardId", element.id);
    setDragStart(true);
  };

  const handleDragOver = (e, id) => {
    e.preventDefault();
    if (overId === id) return;
    setOverId(id);
  };

  const handleDragLeave = (e) => {
    setOverId("");
  };

  const HandleDragEnd = (e, priority, id) => {
    setDragStart(false);
    setOverId("");
    const card = e.dataTransfer.getData("CardId");
    const cardSelect = tasks.find((el) => el.id === card);
    if (!cardSelect) return;
    reOrderTasks(id, card, priority);
  };

  return (
    <div className="w-full p-3" style={{ height: "100vh" }}>
      <h1 className="text-center text-[2em] text-[#53336b] font-semibold tracking-wide">
        ToDo List
      </h1>
      <p className="text-center">You have some things to do</p>
      <div className=" mt-4 pb-14 lg:flex flex-row w-full gap-3 justify-center">
        {priorityTasks.map((elm, i) => {
          return (
            <div key={i}>
              <AnimatePresence>
                <motion.div
                  layout
                  className="mt-4 w-full bg-[#e4dbfb] shadow-[0_2px_3px_0px_#ddc9d9] p-[10px] lg:min-w-[300px]"
                >
                  <div className="w-full flex justify-between items-center mb-0">
                    <h2 className="text-[#000] text-[16px] font-semibold capitalize tracking-wide">
                      {elm} priority
                    </h2>
                    <PinIcon width={22} height={22} />
                  </div>

                  <div className="mt-1 flex flex-col  w-full">
                    {tasks
                      .filter(
                        (task) =>
                          task &&
                          task.priority.toLowerCase() === elm.toLowerCase()
                      )
                      .map((task, index) => {
                        if (!task) return <></>;
                        return (
                          <div key={index}>
                            <div
                              onDragOver={(e) => {
                                handleDragOver(e, task.id);
                              }}
                              onDragLeave={handleDragLeave}
                              onDrop={(e) => {
                                HandleDragEnd(e, elm.toLowerCase(), task.id);
                              }}
                              className={`relative -z-0 flex justify-center transition-all duration-100 items-center h-[18px] overflow-hidden before:content-[''] before:w-full before:absolute before:transition-all before:duration-100 before:flex before:top-0 before:bottom-0 before:m-auto before:h-[2px] before:bg-[#a2aee9]  ${
                                overId === task.id ? "bg-[#6e55d340]" : ""
                              } before:opacity-0 ${
                                dragStart ? "before:opacity-100 " : ""
                              }`}
                            ></div>
                            <motion.div
                              initial="hidden"
                              animate="visible"
                              variants={variantAnimation}
                              layout
                              layoutId={task.id}
                              id={task.id}
                              draggable={
                                taskDraggable === task.id ? "true" : "false"
                              }
                              onDragEnd={() => {
                                setDragStart(false);
                                console.log("dragged");
                              }}
                              onDragOver={handleDragOver}
                              onDragStart={(e) => {
                                handleDragStart(e, {
                                  id: task.id,
                                  name: task.name,
                                  description: task.description,
                                  checked: task.checked,
                                });
                              }}
                              className="w-full cursor-pointer  bg-[#d5d2ff] transition-all duration-300 items-center flex flex-col relative rounded"
                              key={task.id}
                            >
                              <div className="w-full px-2  transition-all duration-300  ">
                                <div className="flex w-full items-center gap-2">
                                  <div
                                    className={`min-w-[16px] min-h-[16px] border-2 rounded-lg cursor-pointer border-stone-800 transition-all duration-300  ${
                                      task.checked
                                        ? "bg-[#79df58] "
                                        : "hover:bg-[#5650a363]"
                                    }`}
                                    onClick={() => {
                                      checkTask({
                                        id: task.id,
                                        checked: task.checked ? false : true,
                                      });
                                    }}
                                  ></div>
                                  <h3
                                    className="text-[1.05em] -hover:bg-[#3e31473a]   py-2 font-medium w-full leading-5 "
                                    onClick={() => {
                                      showTask(task.id);
                                    }}
                                  >
                                    {task.name}
                                  </h3>
                                  <div className="w-max flex justify-between items-center gap-1">
                                    <button
                                      className="transition-all duration-300 hover:bg-[#f38ac954] rounded-sm p-[2px] outline-none"
                                      onClick={() => {
                                        remove(task.id);
                                      }}
                                    >
                                      <TrashIcon width={24} height={24} />
                                    </button>
                                    <button
                                      className="transition-all duration-300 hover:bg-[#d255e138] rounded-sm p-[2px] outline-none"
                                      onClick={() => {
                                        setEdit(task);
                                      }}
                                    >
                                      <EditIcon width={23} height={26} />
                                    </button>
                                    <button
                                      className="cursor-grab active:cursor-grabbing outline-none transition-all duration-300 hover:bg-[#4c4f5326] rounded-sm p-[2px]"
                                      onMouseEnter={() => {
                                        setTaskDraggable(task.id);
                                      }}
                                      onMouseLeave={() => {
                                        setTaskDraggable("");
                                      }}
                                    >
                                      <DragIcon width={24} height={26} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={`bg-[#d5d2ff] p-0 px-2 relative w-full max-h-0 overflow-hidden cursor-default transition-all duration-400 text-[14px]  border-[#a2aee9] border-t-2 ' ${
                                  openTask === task.id
                                    ? "max-h-[500px] pt-[5px] pb-[5px]"
                                    : ""
                                }`}
                              >
                                <p className="w-full lg:max-w-[425px]">
                                  {task.description}
                                </p>
                              </div>
                            </motion.div>
                          </div>
                        );
                      })}

                    <div
                      onDragOver={(e) => {
                        handleDragOver(e, `${elm.toLowerCase()}-${i}`);
                      }}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => {
                        HandleDragEnd(e, elm.toLowerCase(), "");
                      }}
                      className={`relative -z-0 flex justify-center transition-all duration-100 items-center h-[18px] overflow-hidden before:content-[''] before:w-full before:absolute before:transition-all before:duration-100 before:flex before:top-0 before:bottom-0 before:m-auto before:h-[2px] before:bg-[#a2aee9] ${
                        overId === `${elm.toLowerCase()}-${i}`
                          ? "bg-[#6e55d340]"
                          : ""
                      } before:opacity-0 ${
                        dragStart ? "before:opacity-100 " : ""
                      }`}
                    ></div>
                  </div>
                </motion.div>
              </AnimatePresence>
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

  reOrderTasks(id, cardId, priority) {
    dispatch({
      type: "RE_ORDER_TASKS",
      id,
      cardId,
      priority,
    });
  },

  checkTask(task) {
    dispatch({
      type: "SET_CHECKED_TASK",
      task,
    });
  },

  remove(id) {
    dispatch({
      type: "DELETE_TASK",
      id,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
