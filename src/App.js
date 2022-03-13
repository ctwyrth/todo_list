import { useState } from 'react'
import './App.css';

function App() {
  const [todos, setTodos] = useState([{task: 'What do you need to do today?', isComplete: false}]);

  function handleClick(e, i, value) {
    if (value === 'add') {
      createTodo(e, i);
    } else if (value === 'remove') {
      removeTodo(e, i)
    } else if (value === 'complete') {
      updateTodoComplete(e, i);
    }
  }

  function createTodo(e, i) {
    console.log(i);
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, { task: '', isComplete: false });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].getElementsByClassName('todoitem')[i + 1].focus();
    }, 0);
    let x = document.forms[0].getElementsByClassName('todoitem');
    console.log(x);
  }

  function updateTodo(e, i) {
    const newTodos = [...todos];
    newTodos[i].task = e.target.value;
    setTodos(newTodos);
  }

  function removeTodo(e, i) {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
    setTimeout(() => {
      document.forms[0].getElementsByClassName('todoitem')[i].focus();
    }, 0);
  }

  function updateTodoComplete(e, i) {
    const newTodos = [...todos];
    newTodos[i].isComplete = !newTodos[i].isComplete;
    setTodos(newTodos);
  }

  return (
    <div className="container-fluid my-4">
      <div className="container">
        <form className="col-6 bg-primary text-light p-2 border-0 rounded-3">
          <h4 className="bg-light text-dark text-center border-0 rounded py-1 px-2 mb-3">Your ToDos For Today:</h4>
          { todos.map(( todo, i ) =>
            <div className="ms-3 mb-2" key={i}>
              <div className="form-check d-flex justify-content-start align-items-center">
                <input className="form-check-input" type="checkbox" id="todocheck" checked={ todo.isComplete } onClick={e => { handleClick(e, i, 'complete') }} />
                <input type="text" id="" className={`bg-primary text-light border-0 ms-2 me-3 ${todo.isComplete && 'text-decoration-line-through'} todoitem`} htmlFor="todocheck" style={{ width: 80 + '%' }} onChange={e => { updateTodo(e, i) }} value={ todo.task } />
                <span className="badge btn-danger border-0 rounded-circle me-2" onClick={e => {handleClick(e, i, 'add')}}>+</span>
                <span className="badge btn-danger border-0 rounded-circle" onClick={e => {handleClick(e, i, 'remove')}}>-</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;

// {task: 'What do you need to do today?', completed: false}