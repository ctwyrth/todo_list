import React, { useState } from 'react'

const TodoList = (props) => {
   const [listTasks, setListTasks] = useState([]);
   // setListTasks(tasks);
   console.log("Task:", props.task);
   if (props.task && props.task !== listTasks[listTasks.length - 1]) {
      console.log("If trigerred in TodoList");
      setListTasks([...listTasks, props.task]);
   }
   console.log("listTasks:", listTasks);
   
   const handleChange = (e, task) => {
      e.preventDefault();
      console.log(task.type());
      setListTasks([...listTasks]);
   }

   return (
      <div className="col-6 my-4 mx-auto">
         <table className="table table-striped">
            <thead className="bg-warning">
               <tr>
                  <th className="w-75 ps-3 py-2 text-start">ToDo List Item</th>
                  <th className="p-2">Completed</th>
               </tr>
            </thead>
            <tbody>
               { listTasks.map( (task,idx) => (
                  <tr key={idx}>
                     <td>{ task.task }</td>
                     <td><input type="checkbox" name="complete" id="complete" checked={ task.complete } onChange={ (e) => { handleChange(e, this) }} /></td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default TodoList