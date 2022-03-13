import React, { useState } from 'react'

const TodoForm = (props) => {
   const [task, setTask] = useState("");
   const complete = false;

   const handleTaskAdd = (e) => {
      e.preventDefault();
      console.log(task)
      props.onNewTodo({ task: task, complete: complete });
      setTask("");
   }

   return (
      <div className="col-6 mt-4 mb-5 mx-auto">
         <form onSubmit={ handleTaskAdd } className="d-flex justify-content-between align-items-center">
            <div className="input-group">
               <span className="input-group-text">New ToDo:</span>
               <input type="text" name="newTodo" id="newTodo" className="form-control" onChange={ (e) => setTask(e.target.value) } value={ task } />
            </div>
            <div>
               <input type="submit" value="Add" className="btn btn-primary ms-2" />
            </div>
         </form>
      </div>
   )
}

export default TodoForm