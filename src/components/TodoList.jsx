import React, { useState } from 'react'

import TodoForm from './TodoForm';

const TodoList = (props) => {
   const [tasks, setTasks] = useState([]);

   if (props.task && props.task !== tasks[tasks.length - 1]) {
      setTasks([...tasks, props.task]);
   }
   
   const addTask = task => {
      if(!task.text || /^\s*$/.test(task.text)) {
         return;
      }

      const newTasks = [task, ...tasks];
      setTasks(newTasks);
   }
   
   const handleChange = (e, task) => {
      e.preventDefault();
      // console.log(task.type());
      setTasks([...tasks]);
   }

   return (
      <div>
         <h1>What's the plan for today?</h1>
         <TodoForm />
      </div>
   )
}

export default TodoList