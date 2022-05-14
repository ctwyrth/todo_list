import React, { useState, useEffect } from 'react'

import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
   const [tasks, setTasks] = useState([]);

   useEffect(() => {
      const check = localStorage.getItem('tasks');
      if (check) {
         setTasks(JSON.parse(check));
      }
   }, []);
   
   const addTask = (task) => {
      if (!task.task || /^\s*$/.test(task.task)) {
         return;
      }

      const newTasks = [task, ...tasks];
      setTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
   }
   
   const updateTask = (taskId, newValue) => {
      if (!newValue.task || /^\s*$/.test(newValue.task)) {
         return;
      }

      const newTasks = [...tasks].map(task => (task.id === taskId ? newValue : task));
      setTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
   }

   const removeTask = (id) => {
      const removeArr = [...tasks].filter(task => task.id !== id);
      setTasks(removeArr);
      localStorage.setItem('tasks', JSON.stringify(removeArr));
   }

   const completeTask = (id) => {
      let updatedTasks = tasks.map(task => {
         if (task.id === id) {
            task.isComplete = !task.isComplete;
         }
         return task;
      });
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
   }

   return (
      <div>
         <h1>What's the plan for today?</h1>
         <TodoForm onSubmit={ addTask } />
         <Todo tasks={ tasks } completeTask={ completeTask } removeTask={ removeTask } updateTask={ updateTask } />
      </div>
   )
}

export default TodoList