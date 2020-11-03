import React,{useState} from 'react'
import EditTask from './EditTask'
import {showOptions,showEditTask} from './functions'
import {connect} from 'react-redux'

const Tasks = ({tasks,edit,remove}) =>{

const [iTask,setITask] = useState({})

const [index,setIndex] = useState({})

const setValuesToEdit = (task,i) =>{
setITask(task)
setIndex(i)
showEditTask('true')
}

	return(
            <div className="tasks">
            <h1>Task List</h1>
            <div className="tasks-container">
               

            {
            	tasks.map((task,i)=>{

            		return(
            			<React.Fragment key={i}>
            			<div className="task">
            		<h3>{task.name}</h3>
            		<p>{task.description}</p>
                <div className="task-footer">
            		<div><i className="fas fa-exclamation-circle"></i><p>{task.priority}</p></div>
            		<div><i className="fas fa-clock"></i> <p>{task.date}</p></div>
                </div>
            		<div className="more">
                 <i onClick={(e)=>showOptions(e.target.dataset.id)} className="fas fa-ellipsis-h" data-id={task.id}></i>
                 <span className="tooltip">Options</span>
                </div>
            		<div className="options" data-id={task.id}> 
                <div onClick={()=>remove(task.id)}><i className="fas fa-trash"></i> <p>Delete Task</p></div>
                <div onClick={()=>setValuesToEdit(task,i)}><i className="fas fa-edit"></i> <p>Edit Task</p></div>
            		</div>

                </div>
            		</React.Fragment>
            		)
            	})
            }
</div>

<EditTask task={iTask} arr={index}/>
            </div>

		)
}


const mapStateToProps = state =>({ 
   tasks:state.tasks
	})

const mapDispatchToProps = dispatch =>({

       edit(id){
        dispatch({
              type:'EDIT_TASK',
              id
            })
       },
          
          remove(id){
            showOptions(id,'delete')
          	dispatch({
          		type:'DELETE_TASK',
          		id
          	})
          }

})

export default connect(mapStateToProps,mapDispatchToProps) (Tasks)