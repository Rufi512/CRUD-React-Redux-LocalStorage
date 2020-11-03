var active = false
var idActive = null
export const showOptions = (id,action) =>{
	const prevoptions = document.querySelectorAll(`.options[data-id="${idActive}"]`)  
	const options = document.querySelectorAll(`.options[data-id="${id}"]`)
	if(action === 'edit'){
		options[0].style.opacity = '0'
	  options[0].style.visibility = 'collapse'
	  idActive = null
	}
	else if(options[0] && action === 'delete'){
      options[0].style.opacity = '0'
	  options[0].style.visibility = 'collapse'
	}
	else if(!prevoptions[0]){
	options[0].style.opacity = '1'
	options[0].style.visibility = 'visible'
	active = true
	idActive = id
	} 
   else if(idActive === id && active === true){
    options[0].style.visibility = 'collapse'
	options[0].style.opacity = '0'
	active = false
   }else if(idActive !== id && active === true){
   	prevoptions[0].style.visibility = 'collapse'
	prevoptions[0].style.opacity = '0'
   	options[0].style.visibility = 'visible'
	options[0].style.opacity = '1'
	idActive = id
   }else{
   	options[0].style.visibility = 'visible'
	options[0].style.opacity = '1'
       idActive = id
       active = true
   }



}

export const showCreateTask = (val) =>{
	const circleClose = document.querySelector('.fa-times-circle')
    const taskShowBack = document.querySelector('.CreateTasks-before')
    if(val === 'true'){
    taskShowBack.style.visibility = 'visible'
    taskShowBack.style.opacity = '1'
    taskShowBack.style.zIndex = '100000'
    circleClose.style.visibility = 'visible'
    circleClose.style.opacity = '1'
}else{
	 taskShowBack.style.visibility = 'collapse'
    taskShowBack.style.opacity = '0'
    taskShowBack.style.zIndex = '0'
    circleClose.style.visibility = 'collapse'
    circleClose.style.opacity = '0'
    taskShowBack.style.zIndex = '0'
}

}

export const showEditTask = (val) =>{
	const editTaskShow = document.querySelector('.edit-task')
	if(val === 'true'){
		editTaskShow.style.visibility = 'visible';
		editTaskShow.style.opacity = '1';
		editTaskShow.style.zIndex = '100000'
	}else{
       editTaskShow.style.visibility = 'collapse';
		editTaskShow.style.opacity = '0';
		editTaskShow.style.zIndex = '0'
	}
}

