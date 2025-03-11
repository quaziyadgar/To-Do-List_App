import { useState } from "react";

export const ToDoItem = ({ task, toggleTask, deleteTask, editTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);
  
    const saveEdit = () => {
      editTask(task.id, editText);
      setIsEditing(false);
    };
  
    return (
      <li className="flex items-center justify-between p-2 bg-white my-2 rounded shadow">
        {isEditing ? (
          <input
            className="flex-grow border p-1"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <span className={task.completed ? "line-through text-gray-500" : ""}>{task.text}</span>
        )}
        <div className="flex items-center">
          {isEditing ? (
            <button className="px-2 text-green-500" onClick={saveEdit}>Save</button>
          ) : (
            <>
              <button className="px-2 text-yellow-500" onClick={() => setIsEditing(true)}>Edit</button>
              <button className="px-2 text-blue-500" onClick={() => toggleTask(task.id)}>✔</button>
              <button className="px-2 text-red-500" onClick={() => deleteTask(task.id)}>✖</button>
            </>
          )}
        </div>
      </li>
    );
  }
  