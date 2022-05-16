import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
   const [task, setTask] = useState("");

   const focus = useRef(null);

   useEffect(() => {
      if (props.edit) {
         setTask(props.edit.value);
      }

      focus.current.focus();
   }, []);
   
   const handleChange = (e) => {
      setTask(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      props.onSubmit({ id: Math.floor(Math.random() * 100000), task: task });
      setTask("");
   }

   return (
      <div className="">
         <form onSubmit={ handleSubmit } className="todo-form">
            <input
               type="text"
               name="task"
               placeholder="Add a task..."
               className={ props.edit ? 'todo-input edit' : 'todo-input' }
               onChange={ handleChange }
               value={ task }
               ref={ focus }
            />
            { props.edit ? <button className="todo-button edit">Update</button> : <button className="todo-button">Add</button> }
         </form>
      </div>
   )
}

export default TodoForm;