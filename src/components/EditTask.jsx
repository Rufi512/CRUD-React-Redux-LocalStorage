import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {showEditTask,showOptions} from './functions'

const EditTask = ({propsTask,numArray,editTask}) =>{

const [task,setTask] = useState({})

useEffect(()=>{
 setTask({
 	id:propsTask.id,
 	name:propsTask.name,
 	date:propsTask.date,
 	description:propsTask.description,
 	priority:propsTask.priority
 })

},[propsTask,numArray])


const handleEdit = (e) =>{
  e.preventDefault()
  editTask(task,numArray)
  showEditTask('false')
}

	return(
        <div className="edit-task">
        <form onSubmit={handleEdit}>
         <i onClick={(e)=>showEditTask(e.target.dataset.active)} className="fas fa-times-circle" data-active={false}></i>
               <div className="form-content">
               <label>Name of task</label>
                  <input type="text" name="name" onChange={(e)=> setTask({...task,name:e.target.value})} value={task.name || ''} required/>
               </div>
               <div className="form-content">
                  <label>Description for the task</label>
                  <textarea name ="description" onChange={(e)=> setTask({...task,description:e.target.value})} value={task.description || ''} required></textarea>
               </div>
               <div className="form-content">
                  <label>Time to finish the task</label>
                  <input type="date" name="date" onChange={(e)=> setTask({...task,date:e.target.value})} value={task.date || ''} required/>
               </div>
               

                 <div className="form-content">
                  <label>Priority for the task</label>
                  <select name="priority" onChange={(e)=> setTask({...task,priority:e.target.value})} value={task.priority || ''}>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  </select>
               </div>

               <div className="form-content">
               <button type="submit">Update Task</button>
               </div>
        </form>
</div>

		)
}

const mapStateToProps = (state,props) => ({
	propsTask:props.task,
	numArray:props.arr
})


const mapDispatchToProps = dispatch => ({
	editTask(task,numArray){
    showOptions(task.id,'edit')
		dispatch({
			type: 'EDIT_TASK',
			task,
			numArray
		})
	}
})



export default connect(mapStateToProps,mapDispatchToProps) (EditTask)