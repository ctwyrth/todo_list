import React, { useState } from 'react'

const TodoForm = (props) => {
   const [task, setTask] = useState("");
   
   const handleChange = (e) => {
      setTask(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      props.onSubmit({ id: Math.floor(Math.random() * 100000), todo: task });
      setTask("");
   }

   return (
      <div className="">
         <form onSubmit={ handleSubmit } className="todo-form">
            <input
               type="text"
               name="task"
               placeholder="Add a task..."
               className="todo-input"
               onChange={ handleChange }
               value={ task }
            />
            <button className="todo-button">Add</button>
         </form>
      </div>
   )
}

export default TodoForm;