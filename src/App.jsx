
import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TaskList from './components/TaskList';

let nextId = 3;//for add a ids 
function App() {
  const [todos, setTodos] = useState([])
  console.log(todos)
  
  
  function handleAddTodo(title) {
    //Adding new Task.
    setTodos([
      ...todos,
      { id: nextId++, title: title, done: false }
    ])
  };
  
  
  function handleChangeTodo(nextTodo) {
    console.log("Next todo***",nextTodo)
    //to update task list.
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo
      } else {
        return t;
      }
    }))
  };
 
  
  function handleDeleteTodo(todoId) {
//Delete the unwanted task.
    setTodos(
      todos.filter(t => t.id !== todoId)
    )
  }
  return (
    < >
      
      <h1>To do list Using React Js</h1>
      <AddTodo
      onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
      
    </>
  );
}

export default App;