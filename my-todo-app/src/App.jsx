import { useState } from 'react'

import { Header } from './components/Header';
import { ToDoList } from './components/ToDoList';

import './App.css'

const items = [{ id: 1, text: "Visit Hospital", completed: false },
  { id: 2, text: "Bank", completed: false }]

function App() {
  const [tasks, setTasks] = useState(items);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: newText } : task)));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-blue-200 text-teal-800 rounded-xl shadow-md">
      <Header />
      <div className="flex mt-4">
        <input
          type="text"
          className="flex-grow p-2 border rounded"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyUp={handleKeyPress}
          placeholder="Add a new task..."
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={addTask}>
          Add
        </button>
      </div>
      <ToDoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}


export default App;
