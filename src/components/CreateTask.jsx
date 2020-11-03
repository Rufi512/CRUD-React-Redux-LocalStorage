import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import {showCreateTask} from './functions'

const CreateTasks = ({sendForm}) =>{
 
const [task,setTask] = useState({})


const handleForm = (e) =>{
  e.preventDefault()
  setTask({...task,id:uuidv4()})
  sendForm(task)
  showCreateTask('false')
}

useEffect(()=>{
 setTask({
  id:uuidv4(),
  name:'',
  date:'',
  description:'',
  priority:'Low'
 })



},[])


return(
  <React.Fragment>
   <i onClick={(e)=>showCreateTask(e.target.dataset.active)} className="fas fa-plus" data-active={true}></i>

<div className="CreateTasks-before">
	<div className="CreateTasks">
 <i onClick={(e)=>showCreateTask(e.target.dataset.active)} className="fas fa-times-circle create-task-circle" data-active={false}></i>
        <h2>Create the Task</h2>

        <form onSubmit={handleForm}>
        
               <div className="form-content">
               <label>Name of the Task</label>
                  <input type="text" name="name" onChange={(e)=> setTask({...task,name:e.target.value})} required/>
               </div>
               <div className="form-content">
                  <label>Description for the task</label>
                  <textarea name ="description" onChange={(e)=> setTask({...task,description:e.target.value})} required></textarea>
               </div>
               <div className="form-content">
                  <label>Time to finish the task</label>
                  <input type="date" name="date" onChange={(e)=> setTask({...task,date:e.target.value})} required/>
               </div>
               

                 <div className="form-content">
                  <label>Priority for the task</label>
                  <select name="priority" onChange={(e)=> setTask({...task,priority:e.target.value})}>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  </select>
               </div>

               <div className="form-content">
               <button type="submit">Create Task</button>
               </div>
        </form>
      </div>
      </div>
      </React.Fragment>
	)
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	sendForm(task){

  dispatch({
    type:'ADD_TASK',
    task
  })
  
},

})



export default connect(mapStateToProps,mapDispatchToProps) (CreateTasks)