import{ useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

import TodoForm from './TodoForm';

function Todo({ tasks, completeTask, removeTask, updateTask }) {
   const [edit, setEdit] = useState({
      id: null,
      value: ''
   });

   const submitUpdate = (value) => {
      updateTask(edit.id, value);
      setEdit({
         id: null,
         value: ''
      })
   }

   if (edit.id) {
      return <TodoForm edit={ edit } onSubmit={ submitUpdate } />;
   }

   return tasks.map((task, idx) => (
      <div className={ task.isComplete ? 'todo-row complete' : 'todo-row' } key={idx}>
         <div key={ task.id } onClick={ () => completeTask(task.id) }>
            { task.task }
         </div>
         <div className="icons">
            <RiCloseCircleLine onClick={() => removeTask(task.id)} className='delete-icon' />
            <TiEdit onClick={() => setEdit({ id: task.id, value: task.task })} className='edit-icon' />
         </div>
      </div>
   ))
}

export default Todo