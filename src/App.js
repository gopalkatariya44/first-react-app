import './App.css';
import { useState } from 'react';
import Task, { } from './Task';

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")

  function handleChange(event) {
    setNewTask(event.target.value);

  }
  function addTask() {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      done: false,
    };
    setTodoList([...todoList, task]);
    console.log(todoList);
  }

  function deleteTask(id) {
    setTodoList(todoList.filter((task) => task.id !== id));
  }
  function doneTask(id) {
    setTodoList(todoList.map((task) => {
      if (task.id === id) {
        return { ...task, done: true };
      } else {
        return task
      }
    }));
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} type='text' />&nbsp;
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className='list'>
        {
          todoList.map((task) => {
            return <Task done={task.done} taskName={task.taskName} id={task.id} deleteTask={deleteTask} doneTask={doneTask} />
          })
        }
      </div>

    </div>
  );
}

export default App;