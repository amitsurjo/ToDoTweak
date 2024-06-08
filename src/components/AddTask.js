export const AddTask = ({tasklist, setTasklist, task, setTask}) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        if(task.id){
            const date = new Date()
            const updatedTask = tasklist.map((todo)=>(
                todo.id === task.id? {id: task.id, name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : todo
            ))
            setTasklist(updatedTask)
            setTask({})
            
        }else{
            const date = new Date();
            const newTask = {
                id: date.getTime(), // time as id
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` // corrected toLocaleDateString()
            }
            setTasklist([...tasklist, newTask])
            setTask({}) //clear input field after submission
    
        }

    
        
    }
  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value = {task.name || ""}autoCapitalize='off' placeholder='add task'maxLength={25} onChange={e=> setTask({...task, name:e.target.value})}/>
            <button type='submit'>{task.id? "Update": "Add"}</button>
        </form>
    </section>
  )
}

